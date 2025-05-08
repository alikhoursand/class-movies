<template>
    <div class="max-w-screen-xl mx-auto my-10">
        <div class="font-bold text-3xl">لیست فیلم ها</div>
        <div class="mt-4 flex flex-wrap justify-center sm:justify-between">
            <LoadingCard v-if="loading" v-for="x in 10"></LoadingCard>
            <MovieCard v-else v-for="movie in movies" :movie="movie"></MovieCard>
        </div>

        <div class="flex items-center justify-center gap-x-3 mt-10">
            <div :class="[' text-xs p-2 btn btn-circle', page != 1 ? '' : 'btn-disabled']" @click="prevPage()">قبلی
            </div>
            <div class="p-2 btn btn-circle">{{ page }}</div>
            <div :class="[' text-xs p-2 btn btn-circle', page != pageCount ? '' : 'btn-disabled']" @click="nextPage()">
                بعدی</div>
        </div>
    </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
import LoadingCard from '@/components/LoadingCard.vue'

export default {
    components: {
        LoadingCard,
        MovieCard
    },
    data() {
        return {
            movies: [],
            loading: true,
            page: 1,
            pageCount: 1,
        }
    },
    mounted() {
        this.getMovies()
    },
    methods: {
        prevPage() {

            if (this.page == 1) {
                return
            }

            this.page--;
            this.getMovies()
        },
        nextPage() {

            if (this.page == this.pageCount) {
                return
            }

            this.page++;
            this.getMovies()
        },

        getMovies() {

            this.loading = true;

            this.axios.get(`https://moviesapi.ir/api/v1/movies?page=${this.page}`).then((response) => {

                this.movies = response.data.data;
                this.pageCount = response.data.metadata.page_count

                setTimeout(() => {
                    this.loading = false;
                }, 1000);

            }).catch((error) => {
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            })
        }
    }
}
</script>

<style scoped></style>
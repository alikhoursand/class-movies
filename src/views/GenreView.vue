<template>
    <div>
        <div class="max-w-screen-xl mx-auto my-8">

            <div class="mt-12 text-center" v-if="loading">
                <span class="loading loading-bars loading-xl"></span>
            </div>
            <div class="flex flex-wrap mt-12" v-else>
                <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
            </div>

            <div class="flex items-center justify-center gap-x-3 mt-10">
                <div :class="[' text-xs p-2 btn btn-circle', page != 1 ? '' : 'btn-disabled']" @click="prevPage()">قبلی
                </div>
                <div class="p-2 btn btn-circle">{{ page }}</div>
                <div :class="[' text-xs p-2 btn btn-circle', page != pageCount ? '' : 'btn-disabled']"
                    @click="nextPage()">
                    بعدی</div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
export default {
    components: { MovieCard },
    data() {
        return {
            movies: [],
            search: null,
            loading: true,
            page: 1,
            pageCount: 1,
        }
    },
    methods: {
        prevPage() {

            if (this.page == 1) {
                return
            }

            this.page--;
            this.movieSearch(this.$route.params.gr)
        },
        nextPage() {

            if (this.page == this.pageCount) {
                return
            }

            this.page++;
            this.movieSearch(this.$route.params.gr)
        },
        doSearch() {
            this.movieSearch(this.search)
        },
        movieSearch(genre) {
            this.loading = true;

            this.axios.get(`https://moviesapi.ir/api/v1/genres/${genre}/movies?page=${this.page}`)
                .then((response) => {
                    this.movies = response.data.data
                    this.pageCount = response.data.metadata.page_count

                    console.log(response.data);

                    setTimeout(() => {
                        this.loading = false;
                    }, 3000);


                })
                .catch((error) => {
                    console.log(error)

                    setTimeout(() => {
                        this.loading = false;
                    }, 3000);
                })
        }
    },
    mounted() {
        this.movieSearch(this.$route.params.gr)
    }
}
</script>

<style></style>
<template>
    <div>
        <div class="max-w-screen-xl mx-auto my-8">
            <div class="flex gap-x-2 flex-wrap">
                <input type="text" class="input focus:outline-none" v-model="search">
                <button class="btn btn-primary" @click="doSearch()">جستجو</button>
            </div>
            <div class="mt-12 text-center" v-if="loading">
                <span class="loading loading-bars loading-xl"></span>
            </div>
            <div class="flex flex-wrap mt-12" v-else>
                <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
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
        }
    },
    methods: {
        doSearch() {
            this.movieSearch(this.search)
        },
        movieSearch(name) {
            this.loading = true;

            this.axios.get(`https://moviesapi.ir/api/v1/movies?q=${name}`)
                .then((response) => {
                    this.movies = response.data.data
                    console.log(this.movies);

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
        this.movieSearch(this.$route.params.query)
    }
}
</script>

<style></style>
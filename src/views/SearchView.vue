<template>
    <div>
        <div class="max-w-screen-xl mx-auto my-8">
            <div class="">
                <input type="text" class="input focus:outline-none" v-model="search">
                <button class="btn btn-primary" @click="doSearch()">جستجو</button>
            </div>
            <div class="flex flex-wrap mt-12">
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

        }
    },
    methods: {
        doSearch() {
            this.movieSearch(this.search)
        },
        movieSearch(name) {
            this.axios.get(`https://moviesapi.ir/api/v1/movies?q=${name}`)
                .then((response) => {
                    this.movies = response.data.data
                    console.log(this.movies);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    mounted() {
        this.movieSearch(this.$route.params.query)
    }
}
</script>

<style></style>
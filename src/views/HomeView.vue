<template>
  <div class=" max-w-screen-xl mx-auto mt-8 px-2">
    <Slider :height="'350px'" :images="[
      '/public/slider-1.jpg',
      '/public/slider-2.jpg',
      '/public/slider-3.jpg',
    ]"></Slider>

    <Genre class="mt-10" :genres="genres" />


    <PageTitle :title="'پیشنهادات'" class="mt-8"></PageTitle>
    <div class="mt-4">
      <MovieSlider :loading="loading" :movies="movies"></MovieSlider>
    </div>

    <PageTitle :title="'جدیدترین فیلم ها'" class="mt-8"></PageTitle>
    <div class="mt-4 flex flex-wrap justify-center sm:justify-between">
      <LoadingCard v-if="loading" v-for="x in 10"></LoadingCard>
      <MovieCard v-else v-for="movie in movies" :movie="movie"></MovieCard>
    </div>

    <PageTitle :title="'فیلم های ترند'" class="mt-8"></PageTitle>
    <div class="mt-4 flex flex-wrap justify-center sm:justify-between">
      <LoadingCard v-if="loading" v-for="x in 10"></LoadingCard>
      <MovieCard v-else v-for="movie in movies" :movie="movie"></MovieCard>
    </div>

  </div>
</template>


<script>
import Slider from '../components/Slider.vue'
import Genre from '../components/Genre.vue'
import PageTitle from '../components/PageTitle.vue'
import MovieCard from '../components/MovieCard.vue'
import LoadingCard from '../components/LoadingCard.vue'
import MovieSlider from '../components/MovieSlider.vue'

export default {

  data() {
    return {
      movies: [],
      loading: true,
      genres: []
    }
  },


  components: {
    Slider,
    Genre,
    PageTitle,
    MovieCard,
    MovieSlider,
    LoadingCard
  },

  mounted() {
    this.axios.get('https://moviesapi.ir/api/v1/genres').then((response) => {

      for (let i = 0; i < 8; i++) {
        this.genres.push(response.data[i])
      }

    }).catch((error) => {
    })

    this.axios.get('https://moviesapi.ir/api/v1/movies').then((response) => {

      this.movies = response.data.data;
      this.loading = false;

    }).catch((error) => {

    })


  }





}
</script>
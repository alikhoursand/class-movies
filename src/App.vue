<template>
  <div>
    <Navbar></Navbar>

    <router-view></router-view>

    <Footer class="mt-10" :genres="genres"></Footer>
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      genres: [],
    }
  },

  mounted() {
    this.axios.get('https://moviesapi.ir/api/v1/genres').then((response) => {

      for (let i = 0; i < 8; i++) {
        this.genres.push(response.data[i])
      }

    }).catch((error) => {
    })
  }
}
</script>
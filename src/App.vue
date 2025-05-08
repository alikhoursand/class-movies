<template>
  <div>
    <Navbar></Navbar>

    <router-view></router-view>

    <Footer class="mt-10"></Footer>
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

  }
}
</script>
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MovieView from '@/views/MovieView.vue'
import SearchView from '@/views/SearchView.vue'
import MovieListView from '@/views/MovieListView.vue'
import GenreView from '@/views/GenreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/view/:id',
      name: 'view',
      component: MovieView,
    },
    {
      path: '/search/:query',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/genre/:gr',
      name: 'genre',
      component: GenreView,
    },
    {
      path: '/movies',
      name: 'movies',
      component: MovieListView
    }


  ],
})

export default router

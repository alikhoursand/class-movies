<template>
    <swiper :slidesPerView="1" :spaceBetween="10" :navigation="true" :breakpoints="{
        '300': {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        '500': {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        '840': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '968': {
            slidesPerVieFw: 4,
            spaceBetween: 30,
        },
        '1050': {
            slidesPerVieFw: 4,
            spaceBetween: 30,
        },
        '1224': {
            slidesPerView: 4.5,
            spaceBetween: 40,
        },
    }" :modules="modules" class="mySwiper">

        <swiper-slide v-if="loading" v-for="x in 10">
            <LoadingCard></LoadingCard>
        </swiper-slide>

        <swiper-slide v-else v-for="movie in movies">
            <MovieCard :movie="movie"></MovieCard>
        </swiper-slide>
    </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import MovieCard from './../components/MovieCard.vue'
import LoadingCard from './../components/LoadingCard.vue'

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
        MovieCard,
        LoadingCard
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },

    mounted() {
        console.log(this.loading);

    },

    props: ['movies', 'loading']
};
</script>
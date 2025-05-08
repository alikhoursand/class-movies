<template>
    <swiper :slidesPerView="1" :spaceBetween="10" :navigation="false" :breakpoints="{
        '300': {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        '500': {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        '840': {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        '968': {
            slidesPerVieFw: 6,
            spaceBetween: 30,
        },
        '1050': {
            slidesPerVieFw: 7,
            spaceBetween: 30,
        },
        '1224': {
            slidesPerView: 8,
            spaceBetween: 40,
        },
    }" :modules="modules" class="mySwiper">

        <swiper-slide v-for="genre in genres">
            <router-link :to="{ name: 'genre', params: { gr: genre.id } }"
                class="text-center block border-3 btn-lg p-2 btn btn-dash btn-primary">{{
                    genre.name
                }}</router-link>
        </swiper-slide>
    </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },

    mounted() {
        console.log(this.loading);
    },

    props: ['genres', 'loading']
};
</script>
<template>
    <swiper :navigation="true" :modules="modules"
        :class="['rounded-box mySwiper object-cover object-center', height == '' ? 'h-[auto]' : 'h-[' + height + ']']">
        <swiper-slide v-for="image in images">
            <div class="relative">
                <div class="absolute w-full h-full bg-neutral opacity-30"></div>
                <img :src="image" class="object-cover" alt="">
            </div>
        </swiper-slide>
    </swiper>
</template>



<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
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
    props: ['images', 'height']
};
</script>
<template>
    <swiper :navigation="true" :modules="modules" class="rounded-box mySwiper h-[450px] object-cover object-center">
        <swiper-slide>
            <div class="relative">
                <div class="absolute w-full h-full bg-neutral opacity-30"></div>
                <img src="/public/slider-1.jpg" class="" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <div class="absolute w-full h-full bg-neutral opacity-30"></div>
                <img src="/public/slider-2.jpg" class="" alt="">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <div class="absolute w-full h-full bg-neutral opacity-30"></div>
                <img src="/public/slider-3.jpg" class="" alt="">
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
};
</script>
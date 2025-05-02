<template>
    <div>
        <div class="relative h-[250px]">
            <div class="absolute w-full h-full bg-neutral/75 text-white flex justify-center items-center">
                <span class="text-3xl font-bold">پخش فیلم {{ movie.title }}</span>
            </div>
            <img src="/public/banner.jpeg" class="object-cover w-full h-full" alt="">
        </div>


        <div class="mt-16 grid grid-cols-3 bg-base-200 p-4 rounded-box max-w-screen-xl mx-auto">
            <div class="col-span-3 lg:col-span-2 p-2">
                <div>
                    <Slider class="w-full" :height="''" :images="movie.images" />
                </div>
            </div>
            <div class="col-span-3 lg:col-span-1 p-2 flex flex-col gap-y-5">
                <span class="text-lg font-medium">دانلود</span>
                <div class="btn btn-primary btn-wide">
                    <span>1080p</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75"
                        stroke="currentColor" class="size-5 inline">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
                <div class="btn btn-primary btn-wide">
                    <span>720p</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75"
                        stroke="currentColor" class="size-5 inline">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
                <div class="btn btn-primary btn-wide">
                    <span>480p</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75"
                        stroke="currentColor" class="size-5 inline">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
            </div>
        </div>


        <div class="mt-8 flex flex-wrap rounded-box bg-base-200 p-4 max-w-screen-xl mx-auto">
            <div class="basis-full md:basis-1/4">
                <img class="w-[250px] mx-auto rounded-box" :src="movie.poster" alt="">
            </div>
            <div class="p-2 basis-full md:basis-3/4">
                <span class="font-bold text-lg">{{ movie.title }}</span>
                <p class="opacity-60">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <div class="flex flex-wrap mt-4 font-medium">
                    <div class="basis-1/2 p-2">مدت زمان: <span class="text-primary">{{ movie.runtime }}</span></div>
                    <div class="basis-1/2 p-2">کارگردان: <span class="text-primary">{{ movie.director }}</span></div>
                    <div class="basis-1/2 p-2">امتیاز: <span class="text-primary">{{ movie.imdb_rating }}</span></div>
                    <div class="basis-1/2 p-2">متا: <span class="text-primary">{{ movie.metascore }}</span></div>
                    <div class="basis-1/2 p-2">تاریخ اکران: <span class="text-primary">{{ movie.released }}</span></div>
                    <div class="basis-1/2 p-2">سال تولید: <span class="text-primary">{{ movie.year }}</span></div>
                    <div class="basis-1/2 p-2">بازیگران: <span class="text-primary">{{ movie.actors }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'

export default {
    components: { Slider },
    data() {
        return {
            movie: {}
        }
    },
    mounted() {

        this.axios.get(`https://moviesapi.ir/api/v1/movies/${this.$route.params.id}`)
            .then((response) => {
                this.movie = response.data
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
</script>

<style scoped></style>
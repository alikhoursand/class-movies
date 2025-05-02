<template>
    <div class="flex flex-wrap justify-center pt-10 bg-base-200">
        <div class="p-2 basis-full lg:basis-1/4">
            <img src="/public/logo-dark.png" class="w-[200px]" alt="">
            <div class="opacity-75 font-medium mt-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                فهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </div>
        </div>
        <div class=" p-2 basis-1/6">
            <p class="font-medium text-lg border-b-4 border-primary w-fit mx-auto">موپلی</p>
            <ul class="mt-3 font-medium opacity-75 text-center">
                <li>خانه</li>
                <li>درباره ما</li>
                <li>فیلم ها</li>
                <li>تماس با ما</li>
            </ul>
        </div>
        <div class=" p-2 basis-1/5">
            <p class="font-medium text-lg border-b-4 border-primary w-fit  mx-auto">ژانرها</p>
            <ul class="mt-3 font-medium text-center">
                <li v-for="genre in genres" class=" opacity-75">{{ genre.name }}</li>
            </ul>
        </div>
        <div class="p-2 basis-full lg:basis-1/4">
            <p class="font-medium text-lg border-b-4 border-primary w-fit">خبرنامه</p>
            <p class="mt-3 font-medium opacity-75">
                برای دریافت آخرین به روز رسانی و اخبار، در خبرنامه ما مشترک شوید
            </p>
            <div class="mt-4">
                <input type="text" placeholder="ایمیل آدرس"
                    class=" w-full input focus:outline-none border-2 focus:border-primary">
            </div>
            <button class="btn btn-primary w-full mt-2 ">عضویت</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['genres']
}
</script>

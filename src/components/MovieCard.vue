<template>
    <div class="max-w-[250px] h-full w-full p-2 relative">
        <div class="absolute left-4 top-4 badge badge-soft badge-warning font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd" />
            </svg>
            {{ movie.imdb_rating }}
        </div>

        <router-link :to="{ name: 'view', params: { id: movie.id } }">
            <img :src="movie.poster == 'https://moviesapi.ir/images/' ? '/404.png' : movie.poster"
                class="rounded-box max-w-[250px] w-full h-[350px] object-cover " alt="">
        </router-link>
        <router-link :to="{ name: 'view', params: { id: movie.id } }"
            class="text-left mt-2 text-lg font-medium h-16 line-clamp-2">
            <span>{{ movie.title }}</span>
        </router-link>
        <div class="text-left mt-2 text-primary" dir="ltr">
            <span v-for="(genre, key) in movie.genres">
                <span v-if="key < movie.genres.length - 1">{{ genre }}, </span>
                <span v-else>{{ genre }}</span>
            </span>
        </div>
        <div class="text-left mt-2">
            {{ movie.year }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['movie'],
}
</script>

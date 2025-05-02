<template>
    <div class="flex justify-between items-center">
        <div class="font-bold text-3xl">{{ title }}</div>
        <div>
            <button class="btn btn-primary btn-sm">
                مشاهده همه
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>
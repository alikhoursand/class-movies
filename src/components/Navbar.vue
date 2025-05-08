<template>
    <div class="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <router-link class="w-[175px]" :to="{ name: 'home' }">
                <img src="/public/logo-dark.png" alt="">
            </router-link>
            <!-- <a href="/" class="w-[175px]">
            </a> -->
        </div>
        <div class="navbar-center hidden lg:flex items-center">
            <ul class="menu menu-horizontal px-1">
                <li class="p-2">
                    <router-link :to="{ name: 'home' }">خانه</router-link>
                </li>
                <li class="p-2">
                    <router-link :to="{ name: 'movies' }">لیست فیلم ها</router-link>
                </li>
            </ul>
        </div>
        <div class="navbar-end space-x-2">
            <button v-if="myTheme == 'light'" class="btn btn-sm md:btn-md btn-circle" @click="changeTheme('dark')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4 md:size-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            </button>
            <button v-else class="btn btn-sm md:btn-md btn-circle" @click="changeTheme('light')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4 md:size-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            </button>

            <button class="btn btn-sm md:btn-md btn-circle" onclick="search_dialog.showModal()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="size-4 md:size-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
            <button class="btn btn-sm md:btn-md btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>

                ثبت نام
            </button>
        </div>
    </div>


    <dialog id="search_dialog" class="modal">
        <div class="modal-box">
            <h3 class="text-lg font-bold">جستجو</h3>
            <div class="mt-4">
                <input type="text" placeholder="نام فیلم" v-model="search" class="input focus:outline-none w-full">
            </div>
            <div class="modal-action">
                <button class="btn btn-primary" @click="doSearch()">جستجو</button>
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn" id="closeSearch">انصراف</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script>
export default {
    data() {
        return {
            search: null,
            myTheme: 'light'
        }
    },
    mounted() {
        if (localStorage.theme) {
            this.myTheme = localStorage.theme
            this.changeTheme(localStorage.theme);
        }
    },

    methods: {
        changeTheme(theme) {
            this.myTheme = localStorage.theme = theme;
            document.querySelector('html').setAttribute('data-theme', theme)
        },
        doSearch() {
            this.$router.push({ name: 'search', params: { query: this.search } })
            document.querySelector("#closeSearch").click()
        }
    }
}
</script>
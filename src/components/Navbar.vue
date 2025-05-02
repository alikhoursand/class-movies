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
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <details>
                        <summary>خانه</summary>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>ژانر</summary>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div class="navbar-end space-x-2">
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
        }
    },
    methods: {
        doSearch() {

            this.$router.push({ name: 'search', params: { query: this.search } })
            document.querySelector("#closeSearch").click()

        }
    }
}
</script>
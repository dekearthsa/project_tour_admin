<script setup>
    import {ref} from "vue";
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const haddleCssMenu = ref("m-navbar-open")
    const haddleCloseMenu = () => {
        if(haddleCssMenu.value === 'm-navbar-open'){
            haddleCssMenu.value = "m-navbar-close"
        }else{
            haddleCssMenu.value = "m-navbar-open"
        }
    }

    const haddleRouter = (page) => {
        if(page === "home"){
            router.push({path:"/"})
        }else if(page === "content"){
            router.push({path:"/content"})
        }else if(page === "product"){
            router.push({path:"/product"})
        }else if(page === "login"){
            router.push({path:"/login"})
        }
    }
</script>


<template>
    <div :class="haddleCssMenu">
        <div class="c-navbar bg-slate-500">
            <div class="op-cl flex justify-end">
                <div class="mt-3 mr-3 w-[100px] flex justify-end" @click="haddleCloseMenu">
                    <svg v-if="haddleCssMenu === 'm-navbar-open'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
                    </svg>
                    <svg v-if="haddleCssMenu === 'm-navbar-close'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div class="ml-10 font-bold text-white" >
                <div class="mt-10 flex" v-if="haddleCssMenu === 'm-navbar-open'" @click="haddleRouter('home')">
                    <div class="mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="w-6 h-6">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                    </div>
                    <div>
                        Home
                    </div>
                </div>
                <div class="mt-10 flex" v-if="haddleCssMenu === 'm-navbar-open'" @click="haddleRouter('content')">
                    <div class="mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="w-6 h-6">
                            <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                            <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        Content
                    </div>
                    
                </div>
                <div class="mt-10 flex" v-if="haddleCssMenu === 'm-navbar-open'" @click="haddleRouter('product')">
                    <div class="mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="w-6 h-6">
                            <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                        </svg>
                    </div>
                    <div>
                        Product
                    </div>
                </div>
            </div>
        </div>
        <div class="footer bg-slate-300 font-bold">
            <div class="flex ml-10" v-if="haddleCssMenu === 'm-navbar-open'" @click="haddleRouter('login')">
                <div class="mr-5 mt-20" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="mt-20">
                    logout
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

.m-navbar-open{
    width: 240px;
    transition: width 1s
}
.m-navbar-close{
    width: 50px;
    transition: width 1s
}
.c-navbar{
    height: 80vh;
}

.footer{
    height: 20vh;
}

</style>
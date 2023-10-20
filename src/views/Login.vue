<script setup>
    import {ref} from "vue";
    import { useRouter } from 'vue-router';
    import CompoentLoading from '../components/CompoentLoading.vue'

    const username = ref("");
    const password = ref("");
    const errorLogin = ref("");
    const isloading = ref(false)

    const router = useRouter();

    const haddleSubmit = () => {
        isloading.value = true
        try{
            isloading.value = false
            router.push({path: "/"})
        }catch(err){
            errorLogin.value = err;
        }
    }


</script>

<template>
    <div class="on-loading" v-if="isloading === true">
        <div class="set-loading">    
            <CompoentLoading/>
        </div>
    </div>
    <div class="login-c">
        <div class="mt-10">
            <div class="flex">
                <label class="mr-3">username</label>
                <input class="border-b-[1px] border-neutral-800" v-model="username"/>
            </div>
            <div class="mt-5">
                <div class="flex">
                    <label class="mr-3">password</label>
                    <input class="border-b-[1px] border-neutral-800" type="password" v-model="password"/>
                </div>
            </div>
            <div class="mt-10">
                <button @click="haddleSubmit" class="btn-login rounded-md border-[1px] w-[100%] h-[30px] bg-neutral-300 hover:bg-neutral-600 hover:text-white">login</button>
            </div>
            <div class="error-login text-red-700 text-center mt-5">
                {{ errorLogin }}
            </div>
        </div>
    </div>
</template>


<style scoped>
.login-c{
    position: fixed; 
    top: 20%;
    left: 50%;
}
.btn-login:active{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.on-loading{
    position: fixed;
    background: rgb(28, 28, 28);
    height: 100vh;
    width: 100%;
    opacity: 0.7;
    z-index: 999;
}

.set-loading{
    position: fixed;
    top: 35%;
    left: 50%;
}

</style>
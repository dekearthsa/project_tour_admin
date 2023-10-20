<script setup>
    import {ref} from "vue";
    import { useRouter } from 'vue-router';

    const username = ref("");
    const password = ref("");
    const errorLogin = ref("");

    const router = useRouter();

    const haddleSubmit = () => {
        try{
            router.push({path: "/"})
        }catch(err){
            errorLogin.value = err;
        }
    }


</script>

<template>
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
                <button @click="haddleSubmit" class="rounded-md border-[1px] w-[100%] h-[30px] bg-neutral-300 hover:bg-neutral-600 hover:text-white">login</button>
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


</style>
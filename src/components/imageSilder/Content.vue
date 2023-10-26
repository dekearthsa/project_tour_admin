<script setup>
    import {ref} from "vue";
    import { onMounted } from "vue";

    const isContent = defineProps(['contentProps'])
    // const isIndex = defineProps(['isIdx'])
    const isClose = ref(true);

    onMounted(() => {
        if(isContent.contentProps.day === 1){
            isClose.value = false
        }else{
            isClose.value = true
        }
    })

    const haddleHideShow = (e) => {
        // console.log(isContent.contentProps)
        if(e){
            isClose.value = false
        }else{
            isClose.value = true
        }
    }

</script>

<template>
    <button @click="haddleHideShow(isClose)">
        <div class="c-day-name-p ml-4 font-bold mb-5 rounded hover:bg-gray-200">Day {{isContent.contentProps.day}}: {{isContent.contentProps.title}}</div>
        <div v-if="!isClose">
            <div class="c-desc ml-4">{{ isContent.contentProps.content }}</div>
            <div class="border-b-[1px] border-zinc-400 mt-3 mb-3"></div>
        </div>
    </button>
</template>



<style>

</style>
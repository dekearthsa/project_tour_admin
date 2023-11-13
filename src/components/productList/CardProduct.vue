<script setup>
import {ref, onMounted }from "vue";
const isData = defineProps(['isData']);
console.log("isData => ",isData.isData)
// console.log(isData)f
// <img src={`data:image/png;base64,${imgFile}`} width="150" height="150"/>
</script>

<template>
    <div class="set-card ml-3 mt-10 border-[1px] border-neutral-400 w-[300px] h-[450px] rounded-md">
        <div class="title text-center font-bold">{{isData.isData.ProductName}}</div>
        <div class="card-desc">
            <div class="card-img">
                <img :src="'data:image/png;base64,'+isData.isData.ArrayBase64[0]" class="m-auto text-center" width="250" height="200"/>
            </div>
            <div class="title-content font-bold ml-2">
                {{ isData.isData.Content[0].Title }}
            </div>
            <div class="card-intro mt-1 mb-3 ml-2 mr-2">
                {{ isData.isData.Content[0].Content }}
            </div>
            <div>
                <div class="font-bold ml-2">Include</div>
                <div v-for="(el, idx) in isData.isData.Include" :key="idx">
                    <div class="ml-4">{{ el }}</div>
                </div>
            </div>
            <div>
                <div class="font-bold ml-2">Exclusive</div>
                <div v-for="(el, idx) in isData.isData.Exclusive" :key="idx">
                    <div class="ml-4">{{ el }}</div>
                </div>
            </div>
            <div>
                <div class="font-bold ml-2">Price</div>
                <div v-for="(el, idx) in isData.isData.Price" :key="idx">
                    <div class="flex">
                        <div class="ml-4 font-semibold">Person</div>
                        <div class="ml-1">{{el.Person}}</div>
                        <div class="ml-4 font-semibold">Price</div>
                        <div class="ml-1">{{el.Price}}</div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="container-c flex justify-around h-[50px] mt-3">
                    <div>
                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Edit</button>
                    </div>
                    <div>
                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.set-card{
    overflow-y: scroll;
}


</style>
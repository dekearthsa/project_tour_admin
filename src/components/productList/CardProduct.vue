<script setup>
// import {ref, onMounted }from "vue";
import axios from "axios";
import { useStore } from 'vuex'

const store = useStore()
const isData = defineProps(['isData']);
const setFirstTitle = isData.isData.Content[0].Title
const setFirstContent = isData.isData.Content[0].Content
// console.log("isData => ",isData.isData)
// console.log(isData)f
// <img src={`data:image/png;base64,${imgFile}`} width="150" height="150"/>

    const haddleOpenUpEdit = (productName, arrayBase64, content, include, exclusive, price, obj, intro) => {
        store.state.isProductPopup = true;
        store.state.isProductName = productName
        store.state.isProductArrayBase64 = arrayBase64
        store.state.isProductContent = content
        store.state.isProductInclude = include
        store.state.isProductExclusive = exclusive
        store.state.isProductPrice = price
        store.state.isProductIntro = intro
        store.state.isProductObj = obj
    }

    const haddleDeleteData = async (keyTitle) => {
        const payload = {
            ProductName: keyTitle
        }
        try{
            const status = await axios.post("https://backend-product-eab54o3b3q-as.a.run.app/api/delete/product", payload);
            if(status.data.status === "ok"){
                alert(`Product name ${keyTitle} is have deleted.`)
                window.location.reload(true)
            }else{
                alert(status.data.status)
            }
        }catch(err){
            console.log(err)
            alert(err)
        }
    }

</script>

<template>
    <div class="set-card ml-3 mt-10 border-[1px] border-neutral-400 w-[300px] h-[450px] rounded-md">
        <div class="title text-center font-bold">{{isData.isData.ProductName}}</div>
        <div class="card-desc">
            <div class="card-img">
                <img :src="'data:image/png;base64,'+isData.isData.ArrayBase64[0]" class="m-auto text-center" width="250" height="200"/>
            </div>
            <div class="title-content font-bold ml-2">
                {{ setFirstTitle }}
            </div>
            <div class=" mt-1 mb-3 ml-2 mr-2">
                <div class="card-intro">
                    {{ setFirstContent }}
                </div>
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
                        <button @click="haddleOpenUpEdit(
                            isData.isData.isProductRegion,
                            isData.isData.ProductName, 
                            isData.isData.ArrayBase64, 
                            isData.isData.Content,
                            isData.isData.Include,
                            isData.isData.Exclusive,
                            isData.isData.Price,
                            isData.isData.Objective,
                            isData.isData.Introduction,
                            )" class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Edit</button>
                    </div>
                    <div>
                        <button @click="haddleDeleteData(isData.isData.ProductName)" class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                    </div>
                    
                </div>
                <div>
                    {{ isData.isData }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.set-card{
    display: block;
    word-break: break-word;
    white-space: pre-wrap;
    -moz-white-space: pre-wrap; 
    overflow-y: scroll;
}



</style>
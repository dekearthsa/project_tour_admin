<script setup>
    import {ref, onMounted }from "vue";
    import axios from "axios";
    import CardProduct from '../components/productList/CardProduct.vue';
    import ComponentEditProduct from "../components/productEdit/ComponentEditProduct.vue";
    import { useStore } from 'vuex'

    const store = useStore()
    const arrayOfProduct = ref("");

    const haddleClosePopUp = () => {
        store.state.isProductPopup = false;
        store.state.isProductName = ""
        store.state.isProductArrayBase64 = []
        store.state.isProductContent = []
        store.state.isProductInclude = []
        store.state.isProductExclusive = []
        store.state.isProductPrice = []
    }


    onMounted( async () => {
        try{
            const result = await axios.get("https://backend-product-eab54o3b3q-as.a.run.app/api/readfile")
            arrayOfProduct.value = result.data.reply
            // console.log(result.data)
        }catch(err){
            console.log(err)
        }
    })
</script>


<template>
    


    <div class="set-popup-content" v-if="store.state.isProductPopup === true">
        <div class="set-nav-content-pop bg-zinc-500">
            <div class="flex justify-end mr-3 font-bold text-white">
                <button @click="haddleClosePopUp">x</button>
            </div>
        </div>
        <div class="pop-detail"> 
            <ComponentEditProduct/>
        </div>
    </div>
    
    <div class="product-list">
        <div class="c-title ml-5 mr-5 mt-5 font-bold">Product list</div>
        <div class="ml-5">
            <div class="mt-5 flex">
                <div>
                    <label class="mr-5">Region</label>
                </div>
                <div>
                    <select class="border-[1px] border-zinc-300 rounded-md">
                        <option value="ทั้งหมด">ทั้งหมด</option>
                        <option value="ภาคเหนือ">ภาคเหนือ</option>
                        <option value="ภาคตะวันตก">ภาคตะวันตก</option>
                        <option value="ภาคกลาง">ภาคกลาง</option>
                        <option value="ภาคตะวันออกเฉียงเหนือ">ภาคตะวันออกเฉียงเหนือ</option>
                        <option value="ภาคตะวันออก">ภาคตะวันออก</option>
                        <option value="ภาคใต้">ภาคใต้</option>
                    </select>
                </div>
                <div class="ml-5">
                    <button class="border-[1px] border-zinc-600 w-[50px] rounded-md text-white bg-zinc-600">Find</button>
                </div>
                
                
            </div>
        </div>
        <div class="product-list">
            <div class="c-loading m-auto flex justify-center" v-if="arrayOfProduct === ''">
                <div class="loader"></div>
            </div>
            <div class="content-list pb-10">
                <div  v-for="(el, idx) in arrayOfProduct" :key="idx">
                    <CardProduct :isData="el" />
                </div>
            </div>
            
        </div>
    </div>
</template>


<style scoped>
.set-popup-content{
    position: fixed;
    background: white;
    left: 20%;
    top: 10%;
    border: 1px solid black;
    border-radius: 10px;
    height: 70vh;
    width: 70%;    
    display: block;
    word-break: break-word;
    white-space: pre-wrap;
    -moz-white-space: pre-wrap; 
    overflow-y: scroll;
}

.set-nav-content-pop{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid black;
}

.product-list{
    overflow-y: scroll;
    height: 100vh;
}
.content-list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.c-loading{
    position: fixed;
    top: 50%;
    left: 50%
}


.loader {
    width: 60px;
    aspect-ratio: 2;
    --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
    background: 
      var(--_g) 0%   50%,
      var(--_g) 50%  50%,
      var(--_g) 100% 50%;
    background-size: calc(100%/3) 50%;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {
      20%{background-position:0%   0%, 50%  50%,100%  50%}
      40%{background-position:0% 100%, 50%   0%,100%  50%}
      60%{background-position:0%  50%, 50% 100%,100%   0%}
      80%{background-position:0%  50%, 50%  50%,100% 100%}
  }
</style>


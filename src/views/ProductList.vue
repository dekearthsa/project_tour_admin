<script setup>
    import {ref, onMounted }from "vue";
    import axios from "axios";
    import CardProduct from '../components/productList/CardProduct.vue';

    const arrayOfProduct = ref("");

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
            
            <div class="content-list pb-10" v-for="(el, idx) in arrayOfProduct" :key="idx">
                
                <CardProduct :isData="el" />
            </div>
        </div>
    </div>
</template>


<style scoped>
.product-list{
    overflow-y: scroll;
    height: 100vh;
}
.content-list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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


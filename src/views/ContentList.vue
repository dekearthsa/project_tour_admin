<script setup>
    import {ref, onMounted} from "vue";
    import axios from "axios";
    import { useStore } from 'vuex'
    import ComponentEditContent from "../components/contentEdit/ComponentEditContent.vue";

    const store = useStore();
    const arrayOfContent = ref([]);
    const isPopup = ref(false);
    const isloading = ref(false)

    const haddleClosePopUp = () => {
        store.state.popContentTitle = "";
        store.state.popContentDetail = "";
        store.state.popContentBase64 = [];
        isPopup.value = false;
    }

    const haddleFetchContent = async () => {
        isloading.value = true
        try{
            const result = await axios.get("https://backend-content-eab54o3b3q-as.a.run.app/api/read/content");
            arrayOfContent.value = result.data.reply
            // console.log(result.data.reply)
            isloading.value = false
        }catch(err){
            console.log("err in haddleFetchContent => ",err);
            alert(err)
            isloading.value = false
        }
    }

    const haddleUpdateContent = (title, content, arrayBase64) => {
        store.state.popContentTitle = title;
        store.state.popContentDetail = content;
        store.state.popContentBase64 = arrayBase64;
        isPopup.value = true;
    }

    onMounted(() => {
        haddleFetchContent();
    })
</script>


<template>
    <div class="c-loading" v-if="isloading"><div class="loader"></div></div>
    <div v-if="!isloading">
        <div class="set-popup-content" v-if="isPopup === true">
            <div class="set-nav-content-pop bg-zinc-500">
                <div class="flex justify-end mr-8 font-bold text-white">
                    <button @click="haddleClosePopUp">x</button>
                </div>
            </div>
            <div class="pop-detail"> 
                <ComponentEditContent/>
            </div>
        </div>
        <div class="content-list pb-4">   
            <div v-for="(el, idx) in arrayOfContent" :key="idx" class="rounded-md mt-3 c-card ml-3 mr-3  w-[300px] border-[1px] border-neutral-500">
                <div class="title-card font-bold ml-3">{{ el.Title }}</div>
                <div>
                    <img class="text-center m-auto" :src="'data:image/png;base64,'+el.ImgBase64[0]" width="270" height="200"/>
                </div>
                <div class="desc-text ml-3 mr-3 overflow-y-scroll h-[130px]">
                    {{ el.Content }}
                </div>
                <div class="container-c flex justify-around h-[50px] mt-3">
                    <div>
                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400" @click="haddleUpdateContent(el.Title, el.Content, el.ImgBase64)">Edit</button>
                    </div>
                    <div>
                        <button @click="haddleDeleteData(el.Title)" class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                    </div>
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
    width: 70%;    
}

.set-nav-content-pop{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid black;
}

.pop-detail{
    overflow-y: scroll;
    height: 70vh;
}

.content-list{
    display:  grid;
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
<script setup>
    import axios from "axios";
    import { ref } from "vue"
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    import { useStore } from 'vuex'

    const store = useStore();
    const isTitle = ref(store.state.popContentTitle);
    const isContent = ref(store.state.popContentDetail);
    const arrayImage = ref();
    const arrayImgUrl = ref([]);

    const imageUpload = async (evt) => {

        let arrayImg = [];
        arrayImage.value = evt
        arrayImgUrl.value  = arrayImg
        for(let i = 0; i <  evt.target.files.length; i++){
            // console.log(evt.target.files[i])
            const createUrl = URL.createObjectURL(evt.target.files[i])
            // console.log(createUrl)
            arrayImg.push(createUrl)
            
        }
        arrayImgUrl.value = arrayImg
        }  

    
    const haddleUpdateContent = async () => {
        const formData = new FormData();
        for(let i = 0; i < arrayImage.value.target.files.length; i++){
            formData.append("images", arrayImage.value.target.files[i]);
        }
        formData.append("title",isTitle.value)
        formData.append("content", isContent.value)

        const headerConf = {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        }
        try{
            // console.log("formData => ",formData)
            const resultOut = await axios.post("https://backend-content-eab54o3b3q-as.a.run.app/api/update/content",formData,headerConf)
            if(resultOut.data.status === "ok"){
                alert("content update success.")
                window.location.reload(true)
            }else{
                alert(resultOut.data.status)
            }
        }catch(err){
            alert(err)
        }
    }
</script>

<template>
    <div class="set-card-content">
        <div class="text-center mt-2">Edit content</div>
        <div>
            <div class="mt-4">
                <carousel class="mb-10"  :items-to-show="1">
                    <slide v-for="slide in store.state.popContentBase64" :key="slide">
                        <img :src="'data:image/png;base64,'+slide" width="600" height="250"/>
                    </slide>
                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
            </div>
            <div class="mb-5 mt-5 ml-10">
                <div class="flex mt-5" >
                    <img class="set-img ml-2 mr-2" v-for="(img, idx) in arrayImgUrl" :key="idx" :src="img" width="250" height="250" />
                </div>
                <div class="mt-5">
                    <input multiple type="file"  accept="image/png" @change="imageUpload"/>
                </div>
            </div>
            <div class="mt-4 text-center font-bold ">
                <label class="mr-5">Title</label>
                <input class="border-[1px] border-zinc-800 rounded-md" v-model="isTitle" disabled />
            </div>
            
            <div class="mt-5">
                <div class="text-center mb-3 font-bold">
                    Content
                </div>
                <div class="flex justify-center ">
                    <textarea class="m-auto w-[90%] border-[1px] border-zinc-800 rounded-md" v-model="isContent"></textarea>
                </div>
            </div>
            <div class="mt-10 mb-10 text-center">
                <button @click="haddleUpdateContent" class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Update</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.set-card-content{
    
}
</style>
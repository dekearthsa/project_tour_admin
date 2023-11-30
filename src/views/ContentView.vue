<script setup>
    import axios from "axios";
    import {ref, onMounted} from "vue";
    import { useStore } from 'vuex'
    // import ComponentEditContent from "../components/contentEdit/ComponentEditContent.vue";

    const store = useStore();
    
    const arrayImage = ref();
    const arrayImgUrl =ref([]);
    const isTitle = ref("");
    const isContent = ref("");

    const arrayOfContent = ref([]);
    const isPopup = ref(false);

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

    const haddleUploadContent = async () => {
        if(isTitle.value !== "" && isContent.value !== "" && arrayImgUrl.value.length !== 0){
            const formData = new FormData();
            for(let i = 0; i < arrayImage.value.target.files.length; i++){
                formData.append("images", arrayImage.value.target.files[i]);
            }

            formData.append("title", isTitle.value);
            formData.append("content", isContent.value);

            const headerConf = {
                headers: {
                    'Content-Type': `multipart/form-data`
                }
            }    
            
            try{
                const resultOut = await axios.post("https://backend-content-eab54o3b3q-as.a.run.app/api/insert/content", formData, headerConf);
                if(resultOut.data.status === "ok"){
                    isTitle.value = ""
                    isContent.value = ""
                    arrayImgUrl.value = []
                    alert("insert success.");
                    window.location.reload(true)
                }else{
                    alert(result.data.status);
                }
            }catch(err){
                alert(err);
            }
        }else{
            alert("title, content, images cannot be empty!")
        }
    }

    // const haddleUpdateContent = (title, content, arrayBase64) => {
    //     store.state.popContentTitle = title;
    //     store.state.popContentDetail = content;
    //     store.state.popContentBase64 = arrayBase64;
    //     isPopup.value = true;
    // }
    // const haddleClosePopUp = () => {
    //     store.state.popContentTitle = "";
    //     store.state.popContentDetail = "";
    //     store.state.popContentBase64 = [];
    //     isPopup.value = false;
    // }

    // const haddleFetchContent = async () => {
    //     try{
    //         const result = await axios.get("https://backend-content-eab54o3b3q-as.a.run.app/api/read/content");
    //         arrayOfContent.value = result.data.reply
    //         // console.log(result.data.reply)
    //     }catch(err){
    //         console.log("err in haddleFetchContent => ",err);
    //     }
    // }



    // onMounted(() => {
    //     haddleFetchContent();
    // })

</script>


<template>
    <!-- <div class="set-popup-content" v-if="isPopup === true">
        <div class="set-nav-content-pop bg-zinc-500">
            <div class="flex justify-end mr-8 font-bold text-white">
                <button @click="haddleClosePopUp">x</button>
            </div>
        </div>
        <div class="pop-detail"> 
            <ComponentEditContent/>
        </div>
    </div> -->
    <div class="set-content">
        <div class="ml-3 mr-3 mt-5"> 
            <div class="title text-[18px] font-bold">Content</div>
            <div class="c-desc border-t-[1px] border-neutral-300 w-[100%]">
                <div class="mt-10 ">
                    <div class="mb-5">
                        <div class="flex mt-5" >
                            <img class="set-img ml-2 mr-2" v-for="(img, idx) in arrayImgUrl" :key="idx" :src="img" />
                        </div>
                        <div class="mt-5">
                            <input multiple type="file"  accept="image/png" @change="imageUpload"/>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label class="mr-5">Title</label>
                        <input class="border-[1px] w-[300px] rounded-md border-neutral-500" v-model="isTitle"/>
                    </div>
                    <div>
                        <textarea class="border-neutral-500 border-[1px] w-[100%] h-[35vh] rounded-md" v-model="isContent"></textarea>
                    </div>
                    
                    <div class="mr-5 flex justify-end">
                        <button @click="haddleUploadContent" class="btn-create w-[100px] rounded-md h-[40px]">Create</button>
                    </div>
                </div>
                <div class="border-b-[1px] mt-3"></div>
                <div class="">
                    <!-- <div class="title font-bold">
                        Content list
                    </div> -->
                    <div >
                        <!-- <div class="content-list pb-4">   
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
                        </div> -->
                    </div>
                </div>
            </div>  
        </div>
        
    </div>
</template>


<style scoped>

.set-nav-content-pop{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid black;
}

.pop-detail{
    overflow-y: scroll;
    height: 70vh;
}
.set-popup-content{
    position: fixed;
    background: white;
    left: 20%;
    top: 10%;
    border: 1px solid black;
    border-radius: 10px;
    width: 70%;    
}
.set-content{
    overflow-y: scroll;
    height: 100vh;
}
.set-img{
    max-width: 300px;
    max-height: 300px;
}
.btn-create{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.btn-create:active{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}


 
.content-list{
    display:  grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.btn-crud{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.btn-crud:active{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

</style>
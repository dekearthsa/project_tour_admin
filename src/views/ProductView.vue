<script setup>
    import {ref} from "vue";

    const arrayImage = ref();
    const arrayImgUrl = ref();
    const arrayObj = ref([]);
    const isObj = ref();
    const isDay = ref(1);
    const dayTitle = ref("");
    const dayContent = ref("")
    const contentDay = ref([])

    const imageUpload = async (evt) => {
        let arrayImg = [];
        arrayImage.value = evt.target.files
        arrayImgUrl.value  = arrayImg
        for(let i = 0; i <  evt.target.files.length; i++){
            const createUrl = URL.createObjectURL(evt.target.files[i])
            arrayImg.push(createUrl)
            
        }
        arrayImgUrl.value = arrayImg
    }  

    const addingBtn = async () => {
        isObj.value.trim()
        if(isObj.value !== ""){
            arrayObj.value.push(isObj.value)
            isObj.value = ""
        }
    }

    const removeBtn = async () => {
        arrayObj.value.pop()
    }

    const btnAddingContentDay = async () => {
        const title = dayTitle.value.trim()
        const content = dayContent.value.trim()
        if(title !== "" && content !== ""){
            const setWarp = {
                title: title,
                content: content
            }
            contentDay.value.push(setWarp)
            isDay.value += 1 
            dayTitle.value = ""
            dayContent.value = ""
        }
    }

    const btnRemoveContentDay = async () => {
            isDay.value -= 1 
            contentDay.value.pop()
        
    }
</script>

<template>
    <div class="set-product">
        <div class="ml-3 mr-3 mt-5">
            <div class="title text-[18px] font-bold flex justify-between">
                <div>
                    Product
                </div>
                <div class="mr-10">
                    <button>Product list</button>
                </div>
            </div>
            <div class="border-b-[1px] mt-3"></div>
            <div class="set-desc" >
                <div >
                    <div>
                        <div class="flex mt-5" >
                            <img class="set-img ml-2 mr-2" v-for="(img, idx) in arrayImgUrl" :key="idx" :src="img" width="250" height="250"/>
                        </div>
                        <div class="mt-5">
                            <input multiple type="file"  accept="image/png" @change="imageUpload"/>
                        </div>
                    </div>
                    <div class="border-b-[1px] border-zinc-400 mt-3 mb-3"></div>
                    <div class="w-[550px] mt-10 ">
                        <div>
                            <div>Objective</div>
                            <div>
                                <div v-for="(el, idx) in arrayObj" :key="idx">{{ el }}</div>
                                <input class="border-[1px] border-zinc-600 mr-5 w-[80%]" v-model="isObj"/>
                                <button class="btn-obj w-[30px] h-[30px] rounded-full font-bold" @click="addingBtn">+</button>
                                <button class="btn-obj ml-3 mr-3 w-[30px] h-[30px] rounded-full font-bold" @click="removeBtn">-</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-[550px] mt-10">
                        <div>
                            <div>Introduction</div>
                            <div>
                                <textarea class="border-[1px] w-[100%] h-[300px] border-zinc-600"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="border-b-[1px] border-zinc-400 mt-3 mb-3"></div>
                    <div class="w-[550px] mt-10 pb-10">
                        <div>
                            <div>Content day {{isDay}}</div>
                            <div>
                                <div>
                                    <div class="mr-3 ">Title</div>
                                    <input class="border-[1px] w-[100%] border-zinc-600" v-model="dayTitle"/>
                                </div>
                                <div class="mt-5">
                                    <div>Content</div>
                                    <textarea class="border-[1px]  w-[100%] h-[300px] border-zinc-600" v-model="dayContent"></textarea>
                                </div>
                            </div>
                            <div class="flex justify-around mt-10">
                                <button @click="btnAddingContentDay" class="btn-pro-content w-[100px] h-[40px] rounded-md bg-blue-500 text-white font-bold">Create</button>
                                <button @click="btnRemoveContentDay" class="btn-pro-content w-[100px] h-[40px] rounded-md bg-red-600 text-white font-bold">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-result border-l-[1px] border-zinc-300">
                    <div class="font-bold mb-4 ml-4">
                        <div>Content</div>
                        <div class="border-b-[1px] border-zinc-400 mt-3 mb-3 w-[50%]"></div>
                    </div>
                    <div class="his-content ml-4" v-for="(el, idx) in contentDay" :key="idx">
                        <div class="is-day mb-5">Day {{ idx + 1 }}</div>
                        <div class="title-el font-bold mb-3">{{el.title}}</div>
                        <div class="desc-el">{{el.content}}</div>
                        <div class="border-b-[1px] border-zinc-400 mt-3 mb-3 w-[80%] m-auto"></div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped> 
.set-g{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
}
.set-product{
    overflow-y: scroll;
    height: 100vh;
}   

.set-desc{
    display: grid;
    grid-template-columns: 1fr 1fr;
    
}

 

.btn-add{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.btn-add:active{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.btn-obj{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.btn-pro-content{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.btn-pro-content:active{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

</style>
<script setup>
    import {ref} from "vue";
    import ContentReview from "../components/imageSilder/ContentReview.vue"
    import axios from "axios"

    const isProductName = ref("");

    const arrayImage = ref();
    const arrayImgUrl = ref();

    const isRegion = ref();
    // const isProductName = ref();

    const arrayObj = ref([]);
    const isIntroduction =ref("");
    const isObj = ref();
    const isDay = ref(1);
    const dayTitle = ref("");
    const dayContent = ref("");
    const contentDay = ref([]);

    const pricePerPersion = ref([]);
    const isPerson = ref();
    const isPrice = ref("");
    
    const arrayInclude = ref([]);
    const includeDesc = ref("");

    const arrayExclusive = ref([]);
    const ExclusiveDesc = ref("");

    const arrayOfContent = ref([]);
    const errorCreate = ref("");



    const btnCreateArrayOfContent = async () => {
        const setIntro = isIntroduction.value.trim();
        // const setTitle = isProductName.value.trim();

        const payload = {
            isRegion: isRegion.value,
            isProductName: isProductName.value,
            arrayObj: arrayObj.value,
            introduction: setIntro,
            arrayImgFile: arrayImage.value.target.files,
            arrayimg: arrayImgUrl.value,
            arrayPrice: pricePerPersion.value,
            arrayInclude: arrayInclude.value,
            arrayExclusive: arrayExclusive.value,
            arrayContent: contentDay.value,
        }
        arrayOfContent.value.shift()
        arrayOfContent.value.push(payload)
        // console.log(arrayOfContent.value)
        
    }

    const btnCreteProduct = async () => {
        const formData = new FormData();
        const setIntro = isIntroduction.value.trim();

        let isTitles = [];
        let isContents = [];
        let isPersons = [];
        let isPrices = [];

        pricePerPersion.value.forEach((element) => {
            isPersons.push(element.person);
            isPrices.push(element.price)
        })

        contentDay.value.forEach((element) => {
            isTitles.push(element.title)
            isContents.push(element.content)
        });
        // console.log("arrayImage.value.target.files => ",arrayImage.value.target.files)
        for(let i = 0; i < arrayImage.value.target.files.length; i++){
            formData.append("images", arrayImage.value.target.files[i]);
        }
        
        formData.append("region", isRegion.value);
        formData.append("productName",isProductName.value);
        formData.append("objective", arrayObj.value);
        formData.append("introduction",setIntro);
        formData.append("include",arrayInclude.value);
        formData.append("exclusive",arrayExclusive.value);
        formData.append("person",isPersons);
        formData.append("price",isPrices);
        formData.append("title",isTitles);
        formData.append("content",isContents);

        const headerConf = {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        }
        try{
            const resultOut = await axios.post("https://backend-product-eab54o3b3q-as.a.run.app/api/sendfile",formData,headerConf)
            console.log("resultOut => ",resultOut.data)
            // if(resultOut.data.status === "ok"){
            //     console.log(resultOut)
            // }else{

            // }
        }catch(err){

        }
    }


    const imageUpload = async (evt) => {
        let arrayImg = [];
        // arrayImage.value = evt.target.files
        arrayImage.value = evt
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
                day: isDay.value,
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

    const btnAddingPrice = async () => {
        const setPerson = isPerson.value;
        const setPrice = isPrice.value.trim();
        if(setPerson !== "" && setPrice !== ""){
            const warpPayload =  {
            person: setPerson,
            price: setPrice,
            }
            pricePerPersion.value.push(warpPayload);
        }

        isPerson.value = "";
        isPrice.value = "";
        
    }

    const btnRemovePrice = async () => {
        pricePerPersion.value.pop()
    }


    const btnAddingInclude = async () => {
        const setInclude = includeDesc.value.trim();
        if(setInclude !== ""){
            arrayInclude.value.push(setInclude)
        }
        includeDesc.value = ""
    }

    const btnRemoveInclude = async () => {
        arrayInclude.value.pop()
    }

    const btnAddingExclusive = async () => {
        const setExclusive = ExclusiveDesc.value.trim();
        if(setExclusive !== ""){
            arrayExclusive.value.push(setExclusive)
        }
        ExclusiveDesc.value = ""
    }

    const btnRemoveExclusive = async () => {
        arrayExclusive.value.pop();
    }

</script>

<template>
    <div class="set-product">
        <div class="ml-3 mr-3 mt-5">
            <div class="title text-[18px] font-bold flex justify-between">
                <div>
                    Product
                </div>
            </div>
            <div class="border-b-[1px] mt-3"></div>
            <div class="set-desc" >
                <div >
                    <div>
                        <div class="mt-5" >
                            <img class="set-img ml-2 mr-2" v-for="(img, idx) in arrayImgUrl" :key="idx" :src="img" width="250" height="250"/>
                        </div>
                        <div class="mt-5">
                            <input multiple type="file"  accept="image/png" @change="imageUpload"/>
                        </div>
                    </div>
                    <div class="border-b-[1px] border-zinc-400 mt-3 mb-3"></div>

                    <div class="flex mb-5 mt-5">
                        <label class="mr-5">Region</label>
                        <div>
                            <select v-model="isRegion" class="border-[1px] border-zinc-300 rounded-md">
                                <option value=""></option>
                                <option value="ภาคเหนือ">ภาคเหนือ</option>
                                <option value="ภาคตะวันตก">ภาคตะวันตก</option>
                                <option value="ภาคกลาง">ภาคกลาง</option>
                                <option value="ภาคตะวันออกเฉียงเหนือ">ภาคตะวันออกเฉียงเหนือ</option>
                                <option value="ภาคตะวันออก">ภาคตะวันออก</option>
                                <option value="ภาคใต้">ภาคใต้</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div class="pro-title">
                            <div>Product Name</div>
                            <input  v-model="isProductName" class="border-[1px] border-zinc-600 mr-5 w-[62%] rounded-md"/>
                        </div>
                    </div>

                    <div class="w-[550px] mt-10 ">
                        <div>
                            <div>Objective</div>
                            <div>
                                <div class="flex" v-for="(el, idx) in arrayObj" :key="idx">
                                    <div class="mr-3">{{idx + 1}}.</div>
                                    <div>{{el}}</div>
                                </div>
                                <input class="border-[1px] border-zinc-600 mr-5 w-[80%] rounded-md" v-model="isObj"/>
                                <button class="btn-obj ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-blue-400 rounded-full text-white" @click="addingBtn">+</button>
                                <button class="btn-obj ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-red-400 rounded-full text-white" @click="removeBtn">-</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="w-[550px] mt-10">
                        <div>
                            <div>Introduction</div>
                            <div>
                                <textarea v-model="isIntroduction" class="border-[1px] w-[100%] h-[300px] border-zinc-600"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10">
                        <div class="title-price">Price</div>
                        <div class="flex mt-4" v-for="(el, idx) in pricePerPersion" :key="idx">
                            <div>{{idx + 1}} .</div>
                            <div>{{el.person}}</div>
                            <div>{{el.price}}</div>
                        </div>
                        <div class="flex">
                            <div>
                                <label>Person</label>
                                <input v-model="isPerson" class="set-input w-[50px] border-[1px] border-neutral-400 rounded-md ml-3 mr-3" type="number"/>
                            </div>
                            <div>
                                <label>Price</label>
                                <input v-model="isPrice" class="set-input w-[200px] border-[1px] border-neutral-400 rounded-md ml-3 mr-3"/>
                            </div>
                            <div class="adding">
                                <button @click="btnAddingPrice" class="ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-blue-400 rounded-full text-white">+</button>
                                <button @click="btnRemovePrice" class="ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-red-400 rounded-full text-white">-</button>
                            </div>
                        </div>
                    </div>

                    <div class="c-include mt-10 ">
                        <div class="title-include">
                            List include
                        </div>
                        <div class="include-desc flex" v-for="(el, idx) in arrayInclude" :key="idx">
                            <div class="mr-3">{{ idx + 1 }}.</div>
                            <div> {{ el }} </div>
                        </div>
                        <div class="flex">
                            <div>
                                <label>Include</label>
                                <input v-model="includeDesc" class="set-input w-[200px] border-[1px] border-neutral-400 rounded-md ml-3 mr-3"/>
                            </div>   
                            <div>
                                <button @click="btnAddingInclude" class="ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-blue-400 rounded-full text-white">+</button>
                                <button @click="btnRemoveInclude" class="ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-red-400 rounded-full text-white">-</button>
                            </div>
                        </div>
                    </div>

                    <div class="c-Exclusive mt-10 ">
                        <div class="title-Exclusive">
                            List Exclusive
                        </div>
                        <div class="include-desc flex" v-for="(el, idx) in arrayExclusive" :key="idx">
                            <div class="mr-3">{{ idx + 1 }}.</div>
                            <div> {{ el }} </div>
                        </div>
                        <div class="flex">
                            <div>
                                <label>Exclusive</label>
                                <input v-model="ExclusiveDesc" class="set-input w-[200px] border-[1px] border-neutral-400 rounded-md ml-3 mr-3"/>
                            </div>   
                            <div>
                                <button @click="btnAddingExclusive" class="ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-blue-400 rounded-full text-white">+</button>
                                <button @click="btnRemoveExclusive" class="ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-red-400 rounded-full text-white">-</button>
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
                            <div class="flex justify-end mt-10">
           
                                <button @click="btnAddingContentDay" class="ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-blue-400 rounded-full text-white">+</button>
                                <button @click="btnRemoveContentDay" class="ml-2 mr-2 w-[25px]  h-[25px] font-bold bg-red-400 rounded-full text-white">-</button>
                            </div>
                        </div>
                        <div>
                            <div class="his-content ml-4" v-for="(el, idx) in contentDay" :key="idx">
                                <div class="is-day mb-5">Day {{ idx + 1 }}</div>
                                <div class="title-el font-bold mb-3">{{el.title}}</div>
                                <div class="desc-el">{{el.content}}</div>
                                <div class="border-b-[1px] border-zinc-400 mt-3 mb-3 w-[80%] m-auto"></div>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div class="border-b-[1px] border-zinc-400 mt-10 mb-3 w-[100%]"></div>
                    <div class="flex justify-center text-red-700 font-bold" v-if="errorCreate != ''">{{ errorCreate }}</div>
                    <div class="mt-10 mb-10 flex justify-around">
                        
                        <button @click="btnCreateArrayOfContent" class="btn-pro-content w-[100px] h-[40px] rounded-md bg-blue-500 text-white font-bold">Review</button>
                        <button @click="btnCreteProduct" class="btn-pro-content w-[100px] h-[40px] rounded-md bg-blue-500 text-white font-bold">Create</button>
                        <!-- <button @click="btnRemoveContentDay" class="btn-pro-content w-[100px] h-[40px] rounded-md bg-red-600 text-white font-bold">Remove</button> -->
                    </div>
                </div>
                <div class="c-result border-l-[1px] border-zinc-300">
                    <div class="font-bold mb-4 ml-4">
                        <div>Preview Content</div>
                        <div class="border-b-[1px] border-zinc-400 mt-3 mb-3 w-[50%]"></div>
                    </div>
                    <div v-if="arrayOfContent.length !== 0">
                        <div>
                            <ContentReview v-bind:arrayPayload="arrayOfContent"  />
                        </div>
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
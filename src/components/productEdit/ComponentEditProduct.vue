<script setup>
    import { useStore } from 'vuex'
    import axios from "axios"
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import {ref }from "vue";
    const store = useStore()

    const setArrayContent = ref(store.state.isProductContent)
    const setArrayInclude = ref(store.state.isProductInclude)
    const setArrayExclusive = ref(store.state.isProductExclusive)
    const setArrayPrice = ref(store.state.isProductPrice)
    const setIntro = ref(store.state.isProductIntro)
    const setArrayObj = ref(store.state.isProductObj)

    const arrayImage = ref();
    const arrayImgUrl = ref();

    const setRegion = ref(store.state.isProductRegion);
    const setTitle = ref();
    const setContent = ref();
    const setInclude = ref();
    const setExclusive = ref();
    const setPerson = ref();
    const setPrice = ref();
    const setObj = ref();

    const haddleUpdateIntro = () => {
        store.state.isProductIntro = setIntro.value;
    }

    const haddleRemoveObj = () => {
        setArrayObj.value.pop();
    }

    const haddleAddObj = () => {
        setArrayObj.value.push(setObj.value)
    }
    
    const haddleRemoveContent = () => {
        setArrayContent.value.pop();
    }

    const haddleAddContent = () => {
        const setData = {
            Title: setTitle.value,
            Content: setContent.value
        }
        console.log(setData)
        setArrayContent.value.push(setData)
    }
    
    const haddleRemoveInclude = () => {
        setArrayInclude.value.pop()
    }

    const haddleAddInclude = () => {
        setArrayInclude.value.push(setInclude.value)
    }

    const haddleRemoveExclusive = () => {
        setArrayExclusive.value.pop()
    }

    const haddleAddExclusive = () => {
        setArrayExclusive.value.push(setExclusive)
    }   

    const haddleRemovePrice = () => {
        setArrayPrice.value.pop()
    }

    const haddleAddPrice = () => {
        const setData = {
            Person: setPerson.value,
            Price: setPrice.value,
        }
        setArrayPrice.value.push(setData)
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

    const haddleUpdateProduct = async () => {
        const formData = new FormData();

        let isTitle = [];
        let isContent = [];
        let isPerson = [];
        let isPrice = [];

        setArrayContent.value.forEach((element) => {
            isTitle.push(element.Title)
            isContent.push(element.Content)
        });

        setArrayPrice.value.forEach((element) => {
            isPerson.push(element.Person)
            isPrice.push(element.Price)
        })

        for(let i = 0; i < arrayImage.value.target.files.length; i++){
            formData.append("images", arrayImage.value.target.files[i]);
        }
        

        formData.append("region", setRegion.value);
        formData.append("productName",store.state.isProductName);
        formData.append("objective", setArrayObj.value);
        formData.append("introduction",setIntro);
        formData.append("include",setArrayInclude.value);
        formData.append("exclusive",setArrayExclusive.value);
        formData.append("person",isPerson);
        formData.append("price",isPrice);
        formData.append("title",isTitles);
        formData.append("content",isContent);

        try{
            const result = await axios.get("https://backend-product-eab54o3b3q-as.a.run.app/api/update/product");
            if(result.data.status === "ok"){
                alert("update success!")
            }else{
                console.log(result.data.status);
                alert(result.data.status)
            }
        }catch(err){
            console.log(err)
            alert(err)
        }


    }

</script>

<template>
    <div class="set-prodcut-p">
        <div class="set-title text-center">
            <div>{{ store.state.isProductName }}</div>
        </div>
        <div class="set-detail">
            <div>
                <carousel class="mb-10"  :items-to-show="1">
                    <slide v-for="slide in store.state.isProductArrayBase64" :key="slide">
                        <img :src="'data:image/png;base64,'+slide" width="600" height="250"/>
                    </slide>
                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
            </div>
            <div>
                <div class="mt-5" >
                    <img class="set-img ml-2 mr-2" v-for="(img, idx) in arrayImgUrl" :key="idx" :src="img" width="250" height="250"/>
                </div>
                <div class="mt-5">
                    <input multiple type="file"  accept="image/png" @change="imageUpload"/>
                </div>
            </div>
            <div class="set-region ml-10 mt-10">
                <div class="font-bold">
                    <label class="mr-5">Region</label>
                        <div>
                            <select v-model="setRegion" class="border-[1px] border-zinc-300 rounded-md">
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
            </div>
            <div class="set-intro ml-10 mt-10">
                <div class="font-bold">Introduction</div>
                <div>
                    <textarea class="border-[1px]" v-model="setIntro"></textarea>
                </div>
                <button class="mt-3 mr-5 bg-blue-400 w-[50px] h-[30px] rounded-full text-white font-bold" @click="haddleUpdateIntro">Edit</button>
            </div>
            <div class="border-b-[1px] mt-5 mb-5"></div>

            <div class="set-obj ml-10">
                <div class="font-bold">Objective</div> 
                <div v-for="(el, idx) in setArrayObj" :key="idx">
                    <div>{{el}}</div>
                </div>
                <div>
                    <input class="border-[1px]" v-model="setObj"/>
                </div>
                <div class="flex mb-10">
                    <button @click="haddleAddObj" class="mt-3 mr-5 bg-blue-400 w-[30px] h-[30px] rounded-full text-white">+</button>
                    <button @click="haddleRemoveObj" class="mt-3 mr-5 bg-red-400 w-[30px] h-[30px] rounded-full text-white">-</button>
                </div>
            </div>
            <div class="border-b-[1px] mt-5 mb-5"></div>
            
            <div >
                <div v-for="(el, idx) in setArrayContent" :key="idx">
                    <div class="ml-10 mb-4 font-bold border-b-[1px]">Day {{idx +1}}</div>
                    <div class="title-content">
                        <div class="font-bold ml-10">Title</div>
                        <input class="ml-10 mt-3 border-[1px] rounded-md" v-model="el.Title"/>
                    </div>
                    <div class=" mt-1 mb-3 ml-10 mr-2 ">
                        <div class="mt-5 font-bold">Content</div>
                        <div class="card-intro">
                            <textarea class="border-[1px] mt-3" v-model="el.Content"></textarea>
                        </div>
                    </div>
                </div>
                <div class="ml-10">
                    <div>
                        <div>
                            Title
                        </div>
                        <div>
                            <input class="border-[1px]" v-model="setTitle"/>
                        </div>
                    </div>
                    <div>
                        <div>Content</div>
                        <div>
                            <textarea class="border-[1px]" v-model="setContent"></textarea>
                        </div>
                    </div>
                </div>
                <div class="flex ml-10 mb-10">
                    <button @click="haddleAddContent" class="mt-3 mr-5 bg-blue-400 w-[30px] h-[30px] rounded-full text-white">+</button>
                    <button @click="haddleRemoveContent" class="mt-3 mr-5 bg-red-400 w-[30px] h-[30px] rounded-full text-white">-</button>
                </div>
            </div>
            <div class="border-b-[1px] mt-5 mb-5"></div>
            <div >
                <div class="font-bold ml-10">Include</div>
                <div class="mt-3" v-for="(el, idx) in setArrayInclude" :key="idx">
                    <div class="ml-10 ">{{ el }}</div>
                </div>
                <div class="ml-10">
                    <input class="border-[1px]" v-model="setInclude"/>
                </div>
                <div class="flex ml-10">
                    <button @click="haddleAddInclude" class="mt-3 mr-5 bg-blue-400 w-[30px] h-[30px] rounded-full text-white">+</button>
                    <button @click="haddleRemoveInclude" class="mt-3 mr-5 bg-red-400 w-[30px] h-[30px] rounded-full text-white">-</button>
                </div>
            </div>
            <div class="border-b-[1px] mt-5"></div>
            <div>
                <div class="font-bold ml-10 mt-5">Exclusive</div>
                <div class="mt-3" v-for="(el, idx) in setArrayExclusive" :key="idx">
                    <div class="ml-10">{{ el }}</div>
                </div>
                <div class="ml-10">
                    <input class="border-[1px]" v-model="setExclusive"/>
                </div>
                <div class="flex ml-10">
                    <button @click="haddleAddExclusive" class="mt-3 mr-5 bg-blue-400 w-[30px] h-[30px] rounded-full text-white">+</button>
                    <button @click="haddleRemoveExclusive" class="mt-3 mr-5 bg-red-400 w-[30px] h-[30px] rounded-full text-white">-</button>
                </div>
            </div>
            <div class="border-b-[1px] mt-5"></div>
            <div >
                <div class="font-bold mt-5 ml-10">Price</div>
                <div class="mt-3" v-for="(el, idx) in setArrayPrice" :key="idx">
                    <div class="flex ml-5">
                        <div class="ml-4 font-semibold">Person</div>
                        <div class="ml-1">{{el.Person}}</div>
                        <div class="ml-4 font-semibold">Price</div>
                        <div class="ml-1">{{el.Price}}</div>
                    </div>
                </div>
                <div class="ml-10 flex">
                    <div>
                        <label class="mr-3">Person</label>
                        <input class="border-[1px] w-[50px]" type="number" v-model="setPerson"/>
                    </div>
                    <div>
                        <label class="ml-3">Price</label>
                        <input class="border-[1px]" type="number" v-model="setPrice"/>
                    </div>
                    
                </div>
                <div class="flex ml-10">
                    <button @click="haddleAddPrice" class="mt-3 mr-5 bg-blue-400 w-[30px] h-[30px] rounded-full text-white">+</button>
                    <button @click="haddleRemovePrice" class="mt-3 mr-5 bg-red-400 w-[30px] h-[30px] rounded-full text-white">-</button>
                </div>
            </div>
            <div class="border-b-[1px] mt-5"></div>
            <div class="text-center mt-10">
                <button @click="haddleUpdateProduct" class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Update</button>
            </div>
            <div class="mb-10"></div>
        </div>  
    </div>
</template>

<style scoped>

</style>
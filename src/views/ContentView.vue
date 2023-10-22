<script setup>
    import {ref} from "vue";
    const arrayImage = ref();
    const arrayImgUrl =ref();

    const imageUpload = async (evt) => {

        let arrayImg = [];
        arrayImage.value = evt.target.files
        arrayImgUrl.value  = arrayImg
        for(let i = 0; i <  evt.target.files.length; i++){
            // console.log(evt.target.files[i])
            const createUrl = URL.createObjectURL(evt.target.files[i])
            // console.log(createUrl)
            arrayImg.push(createUrl)
            
        }
        arrayImgUrl.value = arrayImg
    }   
</script>


<template>
    <div class="set-content">
        <div class="ml-3 mr-3 mt-5"> 
            <div class="title text-[18px] font-bold">Content</div>
            <div class="c-desc border-t-[1px] border-neutral-300 w-[100%]">
                <div class="mt-10 ">
                    <div class="mb-5">
                        <label class="mr-5">Title</label>
                        <input class="border-[1px] w-[300px] rounded-md border-neutral-500"/>
                    </div>
                    <div>
                        <textarea class="border-neutral-500 border-[1px] w-[100%] h-[35vh] rounded-md"></textarea>
                    </div>
                    <div>
                        <div class="flex mt-5" >
                            <img class="set-img ml-2 mr-2" v-for="(img, idx) in arrayImgUrl" :key="idx" :src="img" />
                        </div>
                        <div class="mt-5">
                            <input multiple type="file"  accept="image/png" @change="imageUpload"/>
                            <div class="mr-5 flex justify-end">
                                <button class="btn-create w-[100px] rounded-md h-[40px]">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-b-[1px] mt-3"></div>
                <div class="">
                    <div class="title font-bold">
                        Content list
                    </div>
                    <div >
                        <div class="content-list pb-4">   
                            <!--card -->
                            <div class="rounded-md mt-3 c-card ml-3 mr-3  w-[300px] border-[1px] border-neutral-500  ">
                                <div class="title-card font-bold ml-3">THAILAND</div>
                                <div>
                                    <img class="text-center m-auto" src="../assets/bkk.jpg" width="270" height="200"/>
                                </div>
                                <div class="desc-text ml-3 mr-3 overflow-y-scroll h-[130px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint labore reiciendis ipsam autem explicabo nobis repellat ad facilis, minus eveniet molestiae excepturi voluptates molestias, natus quod vel minima iure?
                                </div>
                                <div class="container-c flex justify-around h-[50px] mt-3">
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Edit</button>
                                    </div>
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                            <!--card -->
                            <div class="rounded-md mt-3 c-card ml-3 mr-3  w-[300px] border-[1px] border-neutral-500  ">
                                <div class="title-card font-bold ml-3">THAILAND</div>
                                <div>
                                    <img class="text-center m-auto" src="../assets/bkk.jpg" width="270" height="200"/>
                                </div>
                                <div class="desc-text ml-3 mr-3 overflow-y-scroll h-[130px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint labore reiciendis ipsam autem explicabo nobis repellat ad facilis, minus eveniet molestiae excepturi voluptates molestias, natus quod vel minima iure?
                                </div>
                                <div class="container-c flex justify-around h-[50px] mt-3">
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Edit</button>
                                    </div>
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                            <!--card -->
                            <div class="rounded-md mt-3 c-card ml-3 mr-3  w-[300px] border-[1px] border-neutral-500  ">
                                <div class="title-card font-bold ml-3">THAILAND</div>
                                <div>
                                    <img class="text-center m-auto" src="../assets/bkk.jpg" width="270" height="200"/>
                                </div>
                                <div class="desc-text ml-3 mr-3 overflow-y-scroll h-[130px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint labore reiciendis ipsam autem explicabo nobis repellat ad facilis, minus eveniet molestiae excepturi voluptates molestias, natus quod vel minima iure?
                                </div>
                                <div class="container-c flex justify-around h-[50px] mt-3">
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Edit</button>
                                    </div>
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                            <!--card -->
                            <div class="rounded-md mt-3 c-card ml-3 mr-3  w-[300px] border-[1px] border-neutral-500  ">
                                <div class="title-card font-bold ml-3">THAILAND</div>
                                <div>
                                    <img class="text-center m-auto" src="../assets/bkk.jpg" width="270" height="200"/>
                                </div>
                                <div class="desc-text ml-3 mr-3 overflow-y-scroll h-[130px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint labore reiciendis ipsam autem explicabo nobis repellat ad facilis, minus eveniet molestiae excepturi voluptates molestias, natus quod vel minima iure?
                                </div>
                                <div class="container-c flex justify-around h-[50px] mt-3">
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Edit</button>
                                    </div>
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                            <!--card -->
                            <div class="rounded-md mt-3 c-card ml-3 mr-3  w-[300px] border-[1px] border-neutral-500  ">
                                <div class="title-card font-bold ml-3">THAILAND</div>
                                <div>
                                    <img class="text-center m-auto" src="../assets/bkk.jpg" width="270" height="200"/>
                                </div>
                                <div class="desc-text ml-3 mr-3 overflow-y-scroll h-[130px]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint labore reiciendis ipsam autem explicabo nobis repellat ad facilis, minus eveniet molestiae excepturi voluptates molestias, natus quod vel minima iure?
                                </div>
                                <div class="container-c flex justify-around h-[50px] mt-3">
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Edit</button>
                                    </div>
                                    <div>
                                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <!-- end card -->
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        
    </div>
</template>


<style scoped>
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
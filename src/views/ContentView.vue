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
    <div>
        <div class="ml-3 mr-3 mt-5"> 
            <div class="title text-[18px] font-bold">Content</div>
            <div class="c-desc border-t-[1px] border-neutral-300 w-[100%]">
                <div class="mt-10 ">
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
                        <div class="content-list flex ">    
                            <div class="rounded-md mt-3 card ml-3 mr-3 h-[320px] w-[400px] border-[1px] border-red-500">aosdko</div>
                            <div class="rounded-md mt-3 card ml-3 mr-3 h-[320px] w-[400px] border-[1px] border-red-500">aosdko</div>
                            <div class="rounded-md mt-3 card ml-3 mr-3 h-[320px] w-[400px] border-[1px] border-red-500">aosdko</div>
                            <div class="rounded-md mt-3 card ml-3 mr-3 h-[320px] w-[400px] border-[1px] border-red-500">aosdko</div>
                            <div class="rounded-md mt-3 card ml-3 mr-3 h-[320px] w-[400px] border-[1px] border-red-500">aosdko</div>
                            <div class="rounded-md mt-3 card ml-3 mr-3 h-[320px] w-[400px] border-[1px] border-red-500">aosdko</div>
                            <div class="rounded-md mt-3 card ml-3 mr-3 h-[320px] w-[400px] border-[1px] border-red-500">aosdko</div>
                        </div>

                    </div>
                </div>
            </div>  
        </div>
        
    </div>
</template>


<style scoped>
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
    overflow-x: scroll;
}

</style>
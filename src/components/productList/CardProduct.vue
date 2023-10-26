<script setup>
const isDetail = defineProps(['isDesc']);
</script>

<template>
    <div class="set-card m-auto mt-10 border-[1px] border-neutral-400 w-[90%] h-[450px] rounded-md">
        <div class="title text-center">Thailand</div>
        <div class="card-desc">
            <div class="card-img">
                <img src="../../assets/bkk.jpg" class="m-auto text-center" width="250" height="200"/>
            </div>
            <div class="card-intro mt-3 ml-2 mr-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates vero culpa dolor velit illum reiciendis, aspernatur fuga reprehenderit omnis cum sequi placeat modi possimus laboriosam ab incidunt numquam odio! Lo
            </div>
            <div>
                <div class="container-c flex justify-around h-[50px] mt-3">
                    <div>
                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-yellow-400">Edit</button>
                    </div>
                    <div>
                        <button class="btn-crud w-[100px] h-[40px] rounded-md bg-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.set-card{
    overflow-y: scroll;
}
</style>
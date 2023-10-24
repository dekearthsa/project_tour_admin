
<script setup>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    const isProps = defineProps(['arrayPayload'])
    // const isShow = ref(false);

    // const haddleShow = () => {
    //     if(false){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

</script>


<template>
    <div class="ml-5 mb-2" v-for="(item, index) in isProps.arrayPayload" :key="index">
        <div class="c-title mb-3 font-bold">
            {{ item.productTitle }}
        </div>
        <carousel class="mb-10"  :items-to-show="1">
            <slide v-for="slide in item.arrayimg" :key="slide">
                <img :src="slide" width="600" height="250"/>
            </slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
        <div class="c-content mb-5">
            <div class="font-bold mb-4">Introduction</div>
            <div>{{ item.introduction }}</div>
            
        </div>

        <div class="c-content  mt-10 mb-3">
            <div class="font-bold mb-5">Content</div>
            <div class="mb-5" v-for="(el, idx) in item.arrayContent" :key="idx">
                <div class="c-day-name-p ml-4 font-bold mb-5 rounded hover:bg-gray-200">Day {{el.day}}: {{el.title}}</div>
                <div class="c-desc ml-4">{{ el.content }}</div>
                <div class="border-b-[1px] border-zinc-400 mt-3 mb-3"></div>
            </div>
        </div>
        
        <div class="c-price">
            <div class="font-bold mt-10 mb-3">Prices</div>
            <div class="flex hover:bg-gray-200 w-[30%] rounded-md" v-for="(el, idx) in item.arrayPrice" :key="idx">
                <div class="c-day ml-4">Person: {{ el.person }}</div>
                <div class="c-desc ml-4">Price: {{ el.price }}</div>
            </div>
        </div>

        <div class="c-exclusive">
            <div class="font-bold mt-10 mb-3">Include</div>
            <div class="flex" v-for="(el, idx) in item.arrayInclude" :key="idx">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#097969" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- <div class="c-day">{{el.day}}: {{el.title}}</div> -->
                <div class="c-desc ml-4">{{ el }}</div>
            </div>
        </div>

        <div class="c-exclusive">
            <div class="font-bold mt-10 mb-3">Exclusive</div>
            <div class="flex" v-for="(el, idx) in item.arrayExclusive" :key="idx">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC300" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- <div class="c-day">{{el.day}}: {{el.title}}</div> -->
                <div class="c-desc ml-4">{{ el }}</div>
            </div>
        </div>
        <div class="border-b-[1px] border-zinc-400 mt-3 mb-3"></div>
    </div>  
</template>

<style scoped>

</style>
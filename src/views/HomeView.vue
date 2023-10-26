<script setup>
  import IconContentSvgVue from "../components/icons/IconContentSvg.vue";
  import IconCreateSvgVue from "../components/icons/IconCreateSvg.vue";
  import IconListSvgVue from "../components/icons/IconListSvg.vue";

  import { useRouter } from 'vue-router';

  const router = useRouter();
  const haddleRouter = (evt) => {
    if(evt === "content"){
      router.push({path: "/content"})
    }else if(evt === "create-product"){
      router.push({path: "/product"})
    }else if(evt === "product-list"){
      router.push({path: "/productlist"})
    }
  }

</script>

<template>
  <div>
    <div class="title"></div>
    <div class="card-desc mt-[25vh] flex justify-around">

      <div class="text-center h-[50vh] border-[1px] border-zinc-500 w-[400px] rounded-md " @click="haddleRouter('content')">
        <div class="c-title">CREATE CONTENT</div>
        <div>
          <div>
            <IconContentSvgVue/>
          </div>
          <div>
            List of content and create update delete content
          </div>
        </div>
      </div>

      <div class="text-center h-[50vh] border-[1px] border-zinc-500 w-[400px] rounded-md" @click="haddleRouter('create-product')">
          <div class="c-title">CREATE PRODUCT</div>
          <div>
            <div>
              <IconListSvgVue/>
              
            </div>
            <div class="mt-7">
              Create new product here
            </div>
          </div>
      </div>

      <div class="text-center h-[50vh] border-[1px] border-zinc-500 w-[400px] rounded-md"  @click="haddleRouter('product-list')">
        <div class="c-title">PRODUCT LIST</div>
        <div>
          <div>
            <IconCreateSvgVue/>
          </div>
          <div>Update and delete product here</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

</style>

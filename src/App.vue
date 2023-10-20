<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/sidebar/SideBar.vue';
</script>

<template>
  <div>
    <div class="flex">
      <div>
        <SideBar/>
      </div>
      <div >
        <RouterView />
      </div>
    </div>
  </div>

</template>

<style >
body{
  margin: 0px;
  padding: 0px;
}
</style>

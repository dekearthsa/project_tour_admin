<script setup>
    import CardProduct from '../components/productList/CardProduct.vue';
</script>


<template>
    <div class="product-list">
        <div class="c-title ml-5 mr-5 mt-5 font-bold">Product list</div>
        <div class="product-list">
            <div class="content-list">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>

                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>

                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
        </div>
    </div>
</template>


<style scoped>
.product-list{
    overflow-y: scroll;
    height: 100vh;
}
.content-list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
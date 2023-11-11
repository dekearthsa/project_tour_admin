<script setup>
    import CardProduct from '../components/productList/CardProduct.vue';

</script>


<template>
    <div class="product-list">
        <div class="c-title ml-5 mr-5 mt-5 font-bold">Product list</div>
        <div class="ml-5">
            <div class="mt-5 flex">
                <div>
                    <label class="mr-5">Region</label>
                </div>
                <div>
                    <select class="border-[1px] border-zinc-300 rounded-md">
                        <option value="ทั้งหมด">ทั้งหมด</option>
                        <option value="ภาคเหนือ">ภาคเหนือ</option>
                        <option value="ภาคตะวันตก">ภาคตะวันตก</option>
                        <option value="ภาคกลาง">ภาคกลาง</option>
                        <option value="ภาคตะวันออกเฉียงเหนือ">ภาคตะวันออกเฉียงเหนือ</option>
                        <option value="ภาคตะวันออก">ภาคตะวันออก</option>
                        <option value="ภาคใต้">ภาคใต้</option>
                    </select>
                </div>
                <div class="ml-5">
                    <button class="border-[1px] border-zinc-600 w-[50px] rounded-md text-white bg-zinc-600">Find</button>
                </div>
                
                
            </div>
        </div>
        <div class="product-list">
            <div class="content-list pb-10">
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
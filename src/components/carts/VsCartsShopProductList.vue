<template>
     <ul>
      <vs-carts-shop-product @addEvent="receiveAdd" @minusEvent="receiveMinus" :singleChecked ="singleChecked" :sid = "sid" :pid="pid" :data="item" v-for="(item,pid) in data" :key="pid"></vs-carts-shop-product>
    </ul>
</template>

<script>
import VsCartsShopProduct from "./VsCartsShopProduct"
export default {
    props:["data","sid","singleChecked"],
    components: {
        VsCartsShopProduct
    },
    methods:{
        receiveAdd(pid,sid){
            console.log(pid)
            this.$emit("addEvent",pid,sid)
        },
        receiveMinus(pid,sid){
            console.log(pid)
            this.$emit("minusEvent",pid,sid)
        }
    }
}
</script>

<style>

</style>

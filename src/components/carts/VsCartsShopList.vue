<template>
    <div class="shopping">
        <vs-carts-shop @chkChecked="receiveCheckedShopEvent" @addEvent="receiveAdd" @minusEvent="receiveMinus" :singleChecked ="singleChecked" :data="shop" :sid="sid" v-for="(shop,sid) in data" :key ="sid"></vs-carts-shop>
    </div>
</template>

<script>
import VsCartsShop from "./VsCartsShop"
export default {
    props:["data","singleChecked"],
    components: {
        VsCartsShop
    },
    methods: {
        receiveCheckedShopEvent(sid){
            console.log(sid)
            this.$emit("changShopEvent",sid)
        },
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

<template>
     <div class="payment-bar">
        <div class="all-checkbox">
            <input type="checkbox"  @change="checkAll" v-model="data.checked" class="check goods-check">全选
        </div>
        <div class="shop-total">
            <strong>总价：<i id="AllTotal" class="total">{{data.totalPrice}}</i></strong>
            <span>减免：100</span></div>
        <a href="#" class="settlement">结算</a>
    </div>
</template>

<script>
export default {
    props:["data"],
    methods:{
        checkAll(){
            this.$emit("checkAllEvent")
        }
    }
}
</script>

<style>

</style>

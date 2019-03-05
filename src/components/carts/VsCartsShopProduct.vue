<template>
      <li>
        <div class="shop-info">
            <input type="checkbox" @change="singleChecked(sid,pid)" v-model="data.checked" class="check goods-check goodsCheck">
            <div class="shop-info-img">
                <a href="#">
                    <img :src ="data.pic">
                </a>
            </div>
            <div class="shop-info-text">
                <h4>{{data.title}}</h4>
                <div class="shop-brief">
                    <span>重量:{{data.attrs.weight}}</span>
                    <span>颜色:{{data.attrs.color}}</span>
                    <span>版本:{{data.attrs.ver}}</span>
                </div>
                <div class="shop-price">
                    <div class="shop-pices">￥<b class="price">{{data.price}}</b>
                    </div>
                    <div class="shop-arithmetic">
                        <a class="minus" @click="minus(pid,sid)">-</a>
                        <span class="num">{{data.qal}}</span>
                        <a class="plus" @click="add(pid,sid)">+</a>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ["data","pid","sid","singleChecked"],
    methods:{
        add(pid,sid){
            this.$emit("addEvent",pid,sid)
        },
        minus(pid,sid){
            this.$emit("minusEvent",pid,sid)
        }
    }
}
</script>

<style>

</style>

<template>
     <div  class="shop-group-item">
        <div class="shop-name">
            <input type="checkbox" @change="shopCheckedChange(data.checked,sid)" v-model="data.checked" class="check goods-check shopCheck">
            <h4><a href="#">{{data.shopName}}</a></h4>
            <div class="coupons">
                <span>领券</span><em>|</em><span>编辑</span>
            </div>
        </div>
       <vs-carts-shop-product-list @addEvent="receiveAdd" @minusEvent="receiveMinus " :singleChecked="singleChecked" :sid="sid" :data="data.products"></vs-carts-shop-product-list>
        <div class="shopPrice">本店总计：￥<span class="shop-total-amount ShopTotal">{{data | counteShopPriceFilter}}</span>
        </div>
    </div>
</template>

<script>
import VsCartsShopProductList from "./VsCartsShopProductList"
export default {
    props:["data","sid","singleChecked"],
    components: {
        VsCartsShopProductList
    },
    methods: {
        shopCheckedChange(checked,sid){
            console.log(checked)
            this.$emit("chkChecked",sid)
        },
        receiveAdd(pid,sid){
            console.log(pid)
            this.$emit("addEvent",pid,sid)
        },
        receiveMinus(pid,sid){
            console.log(pid)
            this.$emit("minusEvent",pid,sid)
        }
    },
    filters: {
        counteShopPriceFilter(shop){
            let total = 0
            shop.products.forEach((p,i)=>{
                if(p.checked){
                    total+= p.price*p.qal
                }
            })
            return total
        }
       
    }
}
</script>

<style>

</style>

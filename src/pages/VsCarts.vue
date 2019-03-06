<template>
    <div>
        <vs-carts-header></vs-carts-header>
        <vs-carts-shop-list :singleChecked="singleChecked" @changShopEvent="selectAllShopProductChecked"
         @minusEvent="receiveMinus" @addEvent="receiveAdd" v-if="cartInfo.shops" :data = "cartInfo.shops" ></vs-carts-shop-list>
        <vs-carts-footer @checkAllEvent ="checkAll" v-if="cartInfo" :data="cartInfo"> </vs-carts-footer>
    </div>
</template>

<script>
import VsCartsHeader from "../components/carts/VsCartsHeader"
import VsCartsFooter from "../components/carts/VsCartsFooter"
import VsCartsShopList from "../components/carts/VsCartsShopList"
import CartsApi from "../api/CartApi"

export default {
    data () {
        return {
            cartInfo :{}
        }
    },
    components:{
        VsCartsHeader,
        VsCartsFooter,
        VsCartsShopList
    },
  created() {
        this._initData()
    },
    watch: {
        cartInfo:{
            handler(n,o){
                console.log(n)
              this._counteCarts(this.cartInfo)
            },
            deep:true
        }
    },
    methods:{
       /** 
        * 初始化页面数据
       */
        _initData(){
            CartsApi.getCarts(data=>{
                console.log(data)
                this.cartInfo = data[0]
                this._counteCarts(data)
            })
        },
        /** 
         * 统计总价格
        */
        _counteCarts(carts){
            let totalPrice = 0
            carts.shops.forEach((shop,sid)=>{
                shop.products.forEach((product,pid)=>{
                    if(product.checked){
                        totalPrice += product.price*product.qal
                    }
                })
            })
            this.cartInfo.totalPrice = totalPrice
        },

        /** 
         * 根据商铺id 和商品id来修改商品数量（添加）
        */
        receiveAdd(pid,sid){
            this.cartInfo.shops[sid].products[pid].qal++
        },
        /**
         * 
         * 根据商铺id 和商品id来修改商品数量 （减少）
         */
        receiveMinus(pid,sid){
            if(this.cartInfo.shops[sid].products[pid].qal<=1){
                 this.cartInfo.shops[sid].products[pid].qal=1
            }else{
                this.cartInfo.shops[sid].products[pid].qal--
            }
        },
        /** 
         *
        */
        selectAllShopProductChecked(sid){
            console.log(sid)
            let checked = this.cartInfo.shops[sid].checked
            this.cartInfo.shops[sid].products.forEach((p,i)=>{
                p.checked= checked
            })
            
        },
        /** 
         *根据商品id和商铺id改变选中状态
        */
        singleChecked(sid,pid){
            let checked = this.cartInfo.shops[sid].products[pid].checked
            this.cartInfo.shops[sid].checked = checked
            this.cartInfo.checked = checked
        
        },
        /** 
         * 结算全选
        */
        checkAll(){
            let checked = this.cartInfo.checked
            this.cartInfo.shops.forEach((shop,sid)=>{
                shop.checked =checked
                shop.products.forEach((product,pid)=>{
                    product.checked = checked
                })
            })
             
        }
    }
}
</script>

<style scoped>
    @import "../assets/carts.css"

</style>

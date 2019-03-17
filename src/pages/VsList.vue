<template>
    <div class="wrap">
        <section>
            <h1>新闻列表</h1>
            <ul>
               <!-- <new-list :item ="item" :idx="index" v-for="(item,index) in newLsit" :key="index"></new-list> -->
               <new-list :item ="item" :idx="index" v-for="(item,index) in newList" :key="index"></new-list>
            </ul>
        </section>
    </div>
</template>

<script>
import NewList from "../components/newlist/NewList"
export default {
    components: {
     NewList
    },
    data(){
        return{
            newList:[
                {title:"重磅!北京市级行政中心正式迁入城市副中心"},
                {title:"普惠小微企业减税出新举措  唱响新时代英雄赞歌"}
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>

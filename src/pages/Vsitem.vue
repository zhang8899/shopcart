<template>
    <div>
        <h1>{{newsInfo.title}}</h1>
        <button @click="goback">back</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            newsInfo:{},
              newList:[
                {title:"重磅!北京市级行政中心正式迁入城市副中心"},
                {title:"普惠小微企业减税出新举措  唱响新时代英雄赞歌"}
            ]
        }
    },
    created () {
        console.log(this.$route.params)
        this.newsInfo = this.newList[this.$route.params.id]
    },
    methods: {
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style >

</style>

<template>
    <li>
        <router-link :to="{name:'item',params:{id:idx}}" v-text="item.title"> </router-link>
    </li>
</template>

<script>
export default {
props:['item','idx']
}
</script>

<style>

</style>

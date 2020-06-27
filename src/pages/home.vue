// 页面的主路由。。。
<template>
    <div>
        <nav-header></nav-header>
        <!-- index嵌套在router-view里面 -->
        <router-view/>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'

export default {
    name: 'nav-home',
    components:{
        NavHeader,NavFooter
    }
}
</script>

<style scoped>

</style>
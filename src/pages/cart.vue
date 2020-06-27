// 页面的主路由。。。
<template>
    <div>
        <order-header/>
        <router-view/>
        <nav-footer/>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'

export default {
    name: 'cart',
    components:{
        NavFooter,OrderHeader
    }
}
</script>

<style scoped>

</style>
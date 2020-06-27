// 订单
<template>
    <div>
        <order-header/>
        <!-- index嵌套在router-view里面 -->
        <router-view/>
        <order-footer/>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'

export default {
    name: 'order',
    components: {
        OrderHeader,OrderFooter
    }
}
</script>

<style scoped>

</style>
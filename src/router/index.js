import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    // 首页
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue'),
    redirect: 'index', //重定向
    // 子路由
    children:[
      // 首页的index
      {
        path: '/index',
        name:'index',
        component: () => import('../pages/index.vue')
      },
      // 商品页
      {
        path: '/product/:id',
        name:'product',
        component: () => import('../pages/product.vue')
      },
      //  商品详情页
      {
        path: '/detail/:id',
        name:'detail',
        component: () => import('../pages/detail.vue')
      },
    ]
  },
  // 购物车
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/cart.vue')
  },
  // 订单
  {
    //  订单根组件
    path: '/order',
    name: 'order',
    component: () =>import('../pages/order.vue'),
    children:[
      {
        path: 'list',
        name: 'order-list',
        component: () =>import('../pages/orderList.vue')
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () =>import('../pages/orderConfirm.vue')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () =>import('../pages/orderPay.vue')
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () =>import('../pages/alipay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

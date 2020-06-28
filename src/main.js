import Vue from 'vue'
// 插件
import axios from 'axios'
import VueAxios from 'vue-axios'
// 组件
import App from './App.vue'
import router from './router'
import store from './store'
import env from './env'

// 根据前端的跨域方式做调整, 前端域名
axios.defaults.baseURL = '/api';  //域名一样 /api  /api/a/b  => /a/b  会忽略api接口代理
axios.defaults.timeout = 5000;

axios.defaults.baseURL = env.baseURL;

// 拦截器  拦截代码
// request 针对用户请求,表单值,时间戳,使用config取里面的参数  统一处理
// response 返回值 , 只要data值
// 给 每个状态定一个状态码, 接口错误拦截
// 请求拦截 对参数的处理 对各种表单处理
axios.interceptors.response.use(function(response){
  // 模仿  获取接口返回值
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    // 10 为未登录
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

// 加载插件
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

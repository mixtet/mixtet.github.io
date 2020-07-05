<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    // 给user添加属性值  对象
    // storage.setItem("user",{username: '小明'})

    // 给user对象,添加属性值 abc : {a: 5}
    // storage.setItem("abc",{a:5},'user')
    // storage.setItem("b",2)
    
    // user对象里面的 属性
    // storage.clear("username","user")


    // json请求 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) =>{
    //   this.res = res;
    // })

    // 通过easy-mock平台实现数据mock
    // 安装了vue-axios 已经把axios挂载在实例上, 使用this.axios就可以调用
    // this.axios.get('/user/login').then((res) =>{
    //   this.res = res;
    // })


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

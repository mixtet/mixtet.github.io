<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  mounted(){
    // 给user添加属性值  对象
    // storage.setItem("user",{username: '小明'})

    // 给user对象,添加属性值 abc : {a: 5}
    // storage.setItem("abc",{a:5},'user')
    // storage.setItem("b",2)
    
    // user对象里面的 属性
    storage.clear("username","user")
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

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>NT2 TP4</h1>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    /* HelloWorld */
    Navbar
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
  margin-top: 60px;
}
hr{
  color: #ffffff;
}
</style>

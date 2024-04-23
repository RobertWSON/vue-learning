<template>

<!--Comment this original Vue Setup logo and welcome message.  
<img alt="Vue logo" src="./assets/logo.png">
<HelloWorld msg="Welcome to Your Vue.js App"/>
This is because I want to display my own Vue welcome message below.
-->   
  <h1>Hello from Vue !</h1>

<!-- Router View is a special tag, that tells Vue Application where we want to display matching page for a given route-->
  <router-view></router-view>

</template>

<script>
/* Comment HelloWorld component import, because HelloWorld component has been removed from template tag  
and we are not using it now. */
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    /* Remove HelloWorld from components object, as we are not using HelloWorld component now 
    in template tag. */
    //HelloWorld
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
</style>

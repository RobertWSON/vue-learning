<template>

<!--Comment this original Vue Setup logo and welcome message.  
<img alt="Vue logo" src="./assets/logo.png">
<HelloWorld msg="Welcome to Your Vue.js App"/>
This is because I want to display my own Vue welcome message below. -->   
  <!-- Remove Vue Hello -->
  <!-- <h1>Hello from Vue !</h1> -->
  <!-- Replace Two Trees Heading with NavBar element 
  <h1>Two Trees Olive Oil</h1> -->
  <NavBar />
  <div class="page-wrap">
    <router-view></router-view>
  </div>
<!-- Router View is a special tag, that tells Vue Application where we want to display matching page for a given route-->
  <!-- Put Router View in a div above -->
  <!-- <router-view></router-view> -->

</template>

<script>
/* Comment HelloWorld component import, because HelloWorld component has been removed from template tag  
and we are not using it now. */
//import HelloWorld from './components/HelloWorld.vue'

import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    /* Remove HelloWorld from components object, as we are not using HelloWorld component now 
    in template tag. */
    //HelloWorld
    NavBar
    }
};
</script>

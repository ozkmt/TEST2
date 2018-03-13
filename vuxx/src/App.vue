<template>
  <div id="app">
    <myheader></myheader>
    <router-view ></router-view>
      <myfooter></myfooter>
  </div>
</template>

<script>

import myfooter from './components/Footer.vue';
import myheader from './components/Header.vue'
export default {
  name: 'app',

components:{
    myheader,
    myfooter
}
}
</script>

<style lang="less">
a{
    text-decoration:none!important;
}

body {
  background-color: #fbf9fe;
  margin: 0px;
  padding: 0px;
  height: 1000px;
  text-decoration:none!important;
}
</style>

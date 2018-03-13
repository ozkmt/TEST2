<template>
  <div>
    <div id="box">
     <input class="button" type="buttontab" value="价格排行" v-on:click="toggle1()">
     <input class="button" type="button" value="收藏排行" v-on:click="toggle2()">   
    </div> 
    <div v-show="isShow"><price></price></div>
    <div v-show="isCollect"><collect></collect></div>
          <br>
      <button-tab v-model="demo01">
        <button-tab-item @on-item-click="consoleIndex()">{{ $t('Articles') }}</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">{{ $t('Products') }}</button-tab-item>
      </button-tab>
      <br>
      <button-tab v-model="demo01">
        <button-tab-item>{{ $t('Articles sync') }}</button-tab-item>
        <button-tab-item>{{ $t('Products sync') }}</button-tab-item>
      </button-tab>
      <br>
</div>
</template>



<script>
import { ButtonTab, ButtonTabItem, Divider} from 'vux'
import price from './price.vue';
import collect from './collect.vue';
export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    Divider,
    price,
    collect
  },
  methods: {
    toggle1:function(){
         
         this.isShow =true;
         this.isCollect =false;
         
     },
     toggle2:function(){
         
         this.isCollect =true;
         this.isShow =false;
     },
         consoleIndex () {
      console.log('click demo01', this.demo01)
    }
  },
  data () {
    return {
      isShow:true,
      isCollect:false,
       demo01: 0
  }
}
}
</script>
<style>
.button {
    background-color: white;
    border: none;
    color: black;
    padding: 15px 58px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
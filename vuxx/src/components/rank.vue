<template>
   <div id="#box">
    
    <tab class="grid-a">
     <tab-item @on-item-click="toggle1()" > 价格排行 </tab-item>
     <tab-item @on-item-click="toggle2()">收藏排行  </tab-item>
    </tab>

    <div v-show="isShow"><price></price></div>
    <div v-show="isCollect"><collect></collect></div>
</div>
</template>



<script>
import { Divider,Tab, TabItem, Sticky,} from 'vux';

import price from './price.vue';
import collect from './collect.vue';

export default {
  components: {
       Tab,
    TabItem,
    Sticky,
    Divider,
    price,
    collect,
  
  },
  methods: {
    toggle1:function(){
         
         this.isShow =true;
         this.isCollect =false;
         
     },
     toggle2:function(){
         
         this.isCollect =true;
         this.isShow =false;
     }
  },
  data () {
    return {
      isShow:true,
      isCollect:false,
  }
}
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.box {
  padding: 15px;
}

.tab-swiper {
  background-color: #fff;
  height: 100px;
  
}

.grid-a{
   margin-top: 47px;
 height: 52px;
 background:white;
 opacity: 0.7;

 
}
.grid-center {
  margin:50px; 
  width: 100%;
  color: snow;
  opacity: 0.8;
  }

</style>
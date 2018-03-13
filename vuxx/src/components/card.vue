<template>
  <div >
    <group>
      <div class="csstitle" >故事广场</div>
     <card>
     
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
        
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">12/1/2018</p> 
        <p style="font-size:14px;line-height:1.2;"><router-link to="/TuCao" >学校附近最好吃的菠萝包！！</router-link></p>
         <p style="color:#999;font-size:12px;">杏酱酱酱</p>
      </div>
    </card>
    
      <card>
      
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">13/1/2018</p> 
        <p ><router-link to="/TuCao" style="font-size:14px;line-height:1.2;" >今天女饭的鸡扒饭赛高...</router-link></p>
         <p style="color:#999;font-size:12px;">小圆</p>
      </div>
    </card>
    </group>
  
  </div>
</template>

<script>

import { Divider, Card,Cell,Group } from 'vux'
export default {
  components: {
    Card,
    Divider,
    Card,
    Group
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.csstitle{
color:#999;font-size:12px;

}

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
© 2017 GitHub, Inc.
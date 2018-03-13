
<template>
  <div>
    <card>
    <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">番茄羊驼</p>
        <p style="font-size:14px;line-height:1.2;">女生饭堂的鸡扒饭真的好难吃，里面的饭软趴趴的黏在一起，毫无嚼劲，菜和鸡扒的分量都好少，真是一言难尽....大家有同感的吗？</p>
      </div>
      <img slot="header" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1065593353,3802804772&fm=27&gp=0.jpg" style="width:100%;display:block;">
    </card>
    <comment></comment>
  </div>
  
</template>

<script>
import { Divider, Card } from 'vux'
import comment from './comment.vue';
export default {
  components: {
    Card,
    Divider,
    comment,
  }
}
</script>

<style>

</style>
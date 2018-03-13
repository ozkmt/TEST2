<template>
<div class="comment">
   <p class="CommentTitle" style="margin-left: 150px">我的点赞</p>
   </br>
   <ul class="collectList">
     <li>
      <img src="http://placeholder.qiniudn.com/60x60/3cc51f/ffffff" >
      <span>金有谦</span>
       
      <p> <x-icon type="ios-heart" size="30" style=" fill:palevioletred;  margin-left: 210px;   margin-top: -55px" ></x-icon></p>
      
   
     </li>
   </ul>
 </div> 
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group
  },
  methods: {
    console () {
      console.log('click')
    }
  }
}
</script>

<style lang="less">

.collectList{
  li{
    list-style: none;
    padding: 0px 0px 0px 6px;
    border-bottom: 1px solid #e8e8e8;
    margin: 0px 0px 20px 0px;
    img{
      border-radius: 50%;
      width: 47px;
      height:47px;
      float: left;
      margin-left: -2px;
      }
    span:nth-child(2){
      font-size: 14px;
      color: #616161;
      font-weight: 300;
      margin-top: 2px;
      padding-bottom: 2px;
      display: block;
      margin-left: 50px;
    }
    span:nth-child(3){
      font-size:12px;
      display: block;
      margin-left: 50px;
      color: #8c8c8c;
      font-weight: 300;
    }
    p{
      padding: 14px 0px 9px 2px;
      font-size: 13px;
      font-weight: 300;
    }

  }
}

</style>
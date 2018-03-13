
<template>
  <div class="effect">
    <tabbar>
        <div class="tabnav">
            <router-link to="/" tag="div">
                <span class="icon-首页"></span>
                <p>故事</p>
            </router-link>
        </div>

        <div class="tabnav">
            <router-link to="/rank" tag="div">
                <span class="icon-排行"></span>
                <p>排行</p>
            </router-link>
        </div>

        <div class="tabnav">
           
           <router-link to="/Fabu" tag="div">
           <span class="icon-发布" >
       
           </span>  <p>+</p>
             </router-link> 
    
        </div>

        <div class="tabnav">
            <router-link to="/message" tag="div">
                <span class="icon-信息"></span>
                <p>信息</p>
            </router-link>
        </div>

        <div class="tabnav">
            <router-link to="/Myhome" tag="div">
                <span class="icon-个人中心"></span>
                <p>个人主页</p>
            </router-link>

        </div>
       
    </tabbar>
  </div>
</template>

<script>
import {Tabbar} from 'vux'

export default {
components: {
    Tabbar
  }
}
</script>

<style lang="less">

.tabnav{
    z-index: 4;
    flex: 1;
    div{
        &:active {
            color:orange;
            
        }
    }
    p {
        text-align:center;
        font-size: 12px;
    }
    span{
        
        display: inline-block;
        font-size: 23px;
        width: 100%;
        text-align: center;
        top: 3px;
        position:static;
        padding-top: 3px;
    }
    
}

.weui-tabbar{
    background-color: #fff!important;
    position:fixed!important;
    opacity:0.98;
    z-index: 3;
    
     
}

</style>

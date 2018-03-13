<template>
  <div id="pl">
    
    <panel :footer="footer" :list="list" :type="type" @on-img-error="onImgError" class="text" ></panel>
  </div>
</template>

<script>
import { Panel, Group, Radio } from 'vux'
export default {
  components: {
    Panel,
    Group,
    Radio
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      type: '1',
      list: [{
         src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://img2.imgtn.bdimg.com/it/u=3018407026,14838598&fm=27&gp=0.jpg',
       
        title: '青菜面',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
      }, {
        src: 'http://img1.imgtn.bdimg.com/it/u=3160808933,40173074&fm=27&gp=0.jpg',
        title: '皮蛋瘦肉粥',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'http://img3.imgtn.bdimg.com/it/u=2082956133,2343462268&fm=27&gp=0.jpg',
        title: '山西凉面',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2182191410,3733230027&fm=27&gp=0.jpg',
        title: '炸酱面',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=965753043,1166395436&fm=27&gp=0.jpg',
        title: '关东煮',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3646463474,1078642665&fm=27&gp=0.jpg',
        title: '麻辣烫',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3048871255,3186829906&fm=27&gp=0.jpg',
        title: '水煮鱼',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      }],
   
    }
  }
}
</script>
<style>
  .text{text-decoration:none!important;}

</style>
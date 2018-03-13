<template>
  <div>
    
    <panel header="" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
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
        fallbackSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=247551009,3595721676&fm=27&gp=0.jpg',

        title: '手撕鸡',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
      }, {
        src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3757659514,1791400048&fm=200&gp=0.jpg',
        title: '叉烧饭',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2053233555,582539255&fm=27&gp=0.jpg',
        title: '鸡扒饭',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'http://img5.imgtn.bdimg.com/it/u=404677234,3990700223&fm=27&gp=0.jpg',
        title: '水煮鱼',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'http://img1.imgtn.bdimg.com/it/u=2627703528,2017160249&fm=27&gp=0.jpg',
        title: '卤肉饭',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'http://img2.imgtn.bdimg.com/it/u=1441567728,1131594398&fm=27&gp=0.jpg',
        title: '珍珠奶茶',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      },
      {
        src: 'http://img0.imgtn.bdimg.com/it/u=3727850658,1752241126&fm=27&gp=0.jpg',
        title: '卤蛋',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        
        
      }],

    }
  }
}
</script>
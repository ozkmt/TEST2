<template>
  <div>
   <group id="home">
     <search top="46px"></search>
      <swiper :list="demo03_list" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
      <cell ></cell>
       <card></card>
   </group>
  
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { Search } from 'vux'
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
import card from './card.vue';
const imgList = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507990170212&di=644446cfe82120ebb2ca970610676ded&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D7f35d820bc003af359b7d4235d43ac29%2F3b87e950352ac65c59de5e5af1f2b21193138a3b.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2641930037,1848040169&fm=27&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2209528878,3754994199&fm=27&gp=0.jpg'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))


export default {
  components: {
    Search,
    Group,
    Cell,
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    card
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
 demo03_list: demoList,         
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
#home{
  margin-top:46px;
  height:1000px;
}

</style>

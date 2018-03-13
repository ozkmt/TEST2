<template>
  <div id="second">
       <cell title="我的点评" is-link link="/MyComment"></cell>
      <cell title="我的点赞" is-link link="MyCollect"></cell>
      <divider>订阅内容</divider>
              <panel :list="list2"></panel>
  </div>
</template>

<script>
import { Panel,Cell,Divider} from 'vux'


export default {
  components: {
    Panel,
    Cell,
    Divider
    
    
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      type: '3',
      
      list2:[
        {
              
        title: '推送标题',
        desc: '推送内容',
        url: {
          path: '/Article',
          replace: false
        }},
             {
                 
        title: '推送标题',
        desc: '推送内容',
        url: {
          path: '',
          replace: false
        }},
             {
                
        title: '推送标题',
        desc: '推送内容',
        url: {
          path: '',
          replace: false
        }
        }
      ],

      footer: {
        title: '查看更多',
        url: ''
      }
    }
  }
}
</script>
<style>
#second{
  margin-top:46px; 
  margin-bottom: 1700px；
}

</style>
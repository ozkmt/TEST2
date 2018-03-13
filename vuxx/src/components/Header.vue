<template>
  <div id='x-header'>
    <x-header :left-options="{showBack: true}" :right-options="{showMore:true}" @on-click-more="showMenus = true" style="background-color: orange;">饭堂故事
  </x-header>
       <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
import { XHeader,Cell, Actionsheet,TransferDom } from 'vux'
export default {
    directives: {
    TransferDom
  },
  components: {
    XHeader,
    Cell,
   Actionsheet,
  },
   data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  },
   methods: {
    console () {
      console.log('click')
    }
  }
}
</script>
<style>

#x-header {
  position: fixed!important;
  width: 100%;
   left: 0%;
 z-index: 99;
  top:0%
}
.cell-x-icon {
  display: block;
  fill: orange;
}
</style>
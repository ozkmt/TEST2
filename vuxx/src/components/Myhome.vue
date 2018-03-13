<template>
  <div class="about">
     <div class="loginUser" :class="{ active: !isLog }">
      <router-link to="/uploadAvatar"  ><img class="userIcon" :src="avatar"></router-link>
      <span>{{user}}</span>
    </div>

    <div class="aboutTop" :class="{ active: isLog }" :to="{path:'/Login'}">
      <span class="loginBtn"><router-link to="/login">登陆</router-link></span>
      <span class="newAccount"><router-link to="/resign">注册新账号</router-link></span>
    </div>
   
  
     <div v-transfer-dom>
      <confirm v-model="show"
        :title="('提示')"
        @on-cancel="onCancel"
        @on-confirm="onConfirm"
        @on-show="onShow"
        @on-hide="onHide">
          <p style="text-align:center;">你确定要退出吗？</p>
      </confirm>
    </div>   

    <group class="">
      <cell  title="设置" is-link  link="/setting"></cell>
      <cell title="意见反馈" is-link link="/feedback"></cell>
    </group>
    
     <span  class="showConfirm" @click="showConfirm">退出登陆</span>
   </div>
  
</template>

<script>
import { Confirm, Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
import { Cell, CellBox } from 'vux'
import axios from "axios"


export default {
  created() {
      this.checkLogin();
  },
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    Confirm,
    XSwitch,
    XButton
  },
  data() {
    return{
      user:'',
      show: false,
      avatar:'',
      isLog:false
    }
  },
  methods: {
    showConfirm(){
      this.show = true;
    },
    checkLogin(){
				let that = this
				axios.get('/api/users/checkLogin')
			  	.then(function (res) {
			  		console.log(res)
			  		if(res.data.code==200){
			  			that.user=res.data.message.username
			  			that.$nextTick(function () {
                			that.isLog=true // => '更新完成'
              			})
			  		}
			  	})
			  	.catch(function (res) {
			    	console.log(res);
			  	});
			},
    logout() {
        	let that = this
				axios.get('/api/users/logout')
			  	.then(function (res) {
			  		console.log(res)
			  		if(res.data.code==200){
			  			that.isLog=false;
			  			that.checkLogin();
			  		}else{
			  			that.isLog=true;
			  		};
			  	})
			  	.catch(function (res) {
			    	console.log(res);
			  	});
      },
    onCancel () {
      console.log('on cancel')
    },
    onConfirm () {
      this.logout();
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
  },

  
}
</script>

<style scoped lang="less">
.about{
  margin-bottom: 90px;
  margin-top: 55px;
}
.aboutTop{
  padding-top: 30px;
}
.newAccount a{
  display: block;
  color:orangered;
  opacity: 0.8;
  font-weight: 200;
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
text-align: center;
  
}
.loginBtn{
   a{
    display: block;
    width: 69%;
    position: relative;
    margin: 0 auto;
    border: 1px solid orangered ;
    text-align: center;
    color:orangered;
    border-radius: 8px;
    line-height: 40px;
    font-size: 18px;
    
   }
}
.loginUser{
  margin: 28px 0px 15px 0px;
  img{
    width: 110px;
    height: 110px;
    position: relative;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
   }
    span{
      display: block;
      position: relative;
      text-align: center;
      font-size: 16px;
      font-weight: 200;
      margin-top: 9px;
    }
}
.showConfirm{
    text-align: center;
    display: block;
    background: #fff;
    margin-top: 18px;
    padding: 8px 0px 8px 0px;
    margin-bottom: 30px;
}
.active{
		display:none;
}
</style>



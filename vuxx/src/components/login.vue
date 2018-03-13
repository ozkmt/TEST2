<template>
 <div class="loginForm">
  <span class="loginTitle">登陆 | 发现更多精彩</span>

   <div class="loginGroup">
    <input ref="user" class="user" type="text" placeholder="手机号/邮箱">
		<input ref="password" class="pwd" type="text" placeholder="密码">

    <a class="login" @click="login()">登陆</a>
    <a class="quicksign"><router-link to="/resign">快速注册</router-link></a>
  </div>
</div>
</template>
<script>
import  axios  from "axios"
	export default{
		name:"Login",
		methods:{
			login:function(){
				var params = {
					"username":this.$refs.user.value,
					"password":this.$refs.password.value
				};
				let that = this
				axios.post('/api/users/login',params)
			  	.then(function (res) {
			  		if(res.data.code==1){
			  			alert(res.data.message)
			  			return
			  		}
			  		that.$router.push({path:'/Myhome'});
			  	})
			  	.catch(function (res) {
			    	console.log(response);
			  	});
			}
		}
	}

</script>
<style lang="less">
input {
  -webkit-appearance:none;
  background-color:transparent; 
  border-color:transparent;   
}
.loginGroup{
  width: 68%;
  position: relative;
  margin: 0 auto;
}
.account,.password{
  width: 99%;
  outline: none;
  margin-bottom: 13px;
  padding: 9px 0px 9px 0px;  
  border: 1px solid #cecece;
  border-radius: 4px;
}
input::-webkit-input-placeholder{
  padding-left: 5px;
}
.login{
  display: block;
  background: orangered;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  font-weight: 200;
  padding: 7px 0px 7px 0px;
  margin-top: 4px;
  opacity: 0.8;
}
.quicksign a{
  font-size: 13px;
  color: orangered;
}
.loginTitle{
  text-align: center;
  display: block;
  font-weight: 200;
  font-size: 13px;
  color:orangered;
  margin-bottom: 27px;
}
.loginForm{
  margin-top: 100px;
}
</style>

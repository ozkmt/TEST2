<template>
 <div class="resignForm">
  <span class="resignTitle">注册</span>
   <div class="resignGroup">
      <input ref="user" class="user" type="text" placeholder="手机号/邮箱">
			<input ref="password" class="pwd" type="text" placeholder="密码">

    <a class="resign" @click="register()">注册</a>
    <p class="userUselist">阅读用户使用协议</p>
  </div>
 </div>
</template>

<script>
	import  axios  from "axios"
	export default{
		name:"Register",
		methods:{
			register:function(){
				var params = {
					"username":this.$refs.user.value,
					"password":this.$refs.password.value
				};
				let  that =this
				axios.post('/api/users/register',params)
			  	.then(function (res) {
			  		console.log(res)
			  		if(res.data.code==200){
			  			alert(res.data.msg)
			  			that.$router.push({path:'/Login'})
			  		}else{
			  			alert(res.data.msg)
			  		}
			  	})
			  	.catch(function (res) {
			    	console.log(res);
			  	});
			  	
			},
			
		}
	}
</script>

<style lang="less">
input {
  -webkit-appearance:none;
  background-color:transparent; 
  border-color:transparent;   
}
.resignGroup{
  width: 68%;
  position: relative;
  margin: 0 auto;
  .userUselist{
      font-size: 12px;
      margin-top: 5px;
      text-align: center;
      color: orangered;
      font-weight: 200;
  }
}
.userName,.password,.repassword,.mobilephone{
    width: 97%;
    outline: none;
    margin-bottom: 13px;
    padding: 9px 0px 9px 6px;
    border: 1px solid #cecece;
    border-radius: 4px;
}
input::-webkit-input-placeholder{
  padding-left: 5px;
}
.tips{
    font-size: 12px;
    color: orangered;
    position: relative;
    top: -9px;
}
.resign{
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
.resignTitle{
  text-align: center;
  display: block;
  font-weight: 200;
  font-size: 16px;
  color:orangered;
  margin-bottom: 27px;
}
.resignForm{
  margin-top: 100px;
}
</style>

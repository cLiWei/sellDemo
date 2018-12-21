<template>
	<view class="loginBox">
		<view class="fixBox">
			用户名：<input type="text" v-model="user"/>
		</view>
		<view class="fixBox">
			密码：<input password v-model="psw"/>
		</view>
		<view >
			<checkbox-group >
				<label class="checkbox">
					<checkbox  checked/>记住密码
				</label>
			</checkbox-group>
			<!-- <navigator url="forgetmm" open-type="redirect">忘记密码</navigator> -->
			<text @tap="forgetmm">忘记密码</text>
		</view>
		<view class="fixBox">
			<button @tap="loginBtn">登录</button>
		</view>
		<view >
			<navigator url="register" open-type="redirect">没有账号？注册一下</navigator>
		</view>
	</view>
	
</template>

<script>
	import {common} from '../../mixins/common.js';
	import {allRequest} from '../../mixins/allRequest.js';
	import {dialog} from '../../mixins/dialog.js';
	import {storage} from '../../mixins/storage.js';
	export default {
		mixins:[common,storage,allRequest,dialog],
		data() {
			return {
				user:"",
				psw:""
			};
		},
		methods:{
			// 登录数据
			loginData(){
				let user = this.user,
					psw = this.psw;
				if(!user || !psw || user =="" || psw ==""){
					return false;
				}
				let data = {
					action:'login',
					user:this.Trim(user),
					psw:this.Trim(psw)
				}
				return data;
			},
			// 登录后台信息
			async loginResult(){
				let url = this.url,
					title ="登录提示";
				let data = this.loginData();
				
				if(data){
					let result =await this.request({
						url:url+"login/login.php",
						type:"POST",
						data:data
					})
					let tip = this.loginTip(result.data);
					if("登录成功!" == tip){
						console.log(tip)
					}else {
						this.openDialog({
							title:title,
							content:tip
						})
					}
				}else{
					this.openDialog({
						title:title,
						content:"用户名和密码不能为空！"
					})
				}
				
				
			},
			loginTip(data){
				let error = data.error,
					content = "";
				if("2" == error){
					content = "用户名不存在";
				}else if("1" == error){
					content = "密码不正确";
				}else if("0" == error){
					content = "登录成功!";
				}else{
					content = "网络错误，请重试！";
				}
				return content;
			},
			// 登录
			loginBtn(){
				this.loginResult();
				
				
			}
		},
	}
</script>

<style scoped lang="less">
	input{
		border:2upx solid #000;
		display: inline-flex;
		flex: 1;
	}
	.fixBox{
		width: 90%;
		text-align: center;
	}
	.loginBox{
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

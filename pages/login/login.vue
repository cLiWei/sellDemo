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
			// 忘记密码
			forgetmm(){
				
			},
			// 登录
			loginBtn(){
				let user = this.user,
					psw = this.psw,
					url = this.url;
				let data = {
					action:'login',
					user:this.Trim(user),
					psw:this.Trim(psw)
				}
				uni.request({
					url:url+"login/login.php",
					data:data,
					method:"GET",
					success(res){
						console.log(res);
					},
					fail(res) {
						console.log(res);
					}
				})
// 				this.request({
// 					url:url+"login/login.php",
// 					
// 					data:data
// 				}).then((res)=>{
// 					console.log(res);
// 				})
				
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

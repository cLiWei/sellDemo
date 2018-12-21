<template>
	<view class="myBox">
		<view class="head">
			<view v-if="hasLogin" class="loginBtn" @tap="loginClick">登录</view>
			<view v-if="!hasLogin">1111</view>
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
				hasLogin:false
			}
		},
		onLoad() {
			let isLogin = this.getStorage("isLogin");
			if(isLogin){
				this.hasLogin = false;
			}else {
				this.hasLogin = true;
			}
		},
		methods: {
			loginClick(){
				uni.navigateTo({
					url: 'login'
				});
			}	
		},
	}
</script>

<style scoped lang="less">
	.myBox{
		
	}
	.head{
		
		background: linear-gradient(indianred,orange);
		width: 100%;
		height: 300upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.loginBtn{
			width:100upx;
			height: 100upx;
			border:10upx solid #eee;
			border-radius:100upx;
			line-height: 100upx;
			text-align: center;
			color:white;
		}
	}
</style>

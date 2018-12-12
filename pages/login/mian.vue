<template>
	<view class="myBox">
		<view class="head">
			<button v-if="hasLogin" size="mini" @tap="loginClick">登录</button>
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
		background-color: indianred;
		width: 100%;
		height: 300upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

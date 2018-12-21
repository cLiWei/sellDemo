<template>
	<view class="regiBox">
		<view class="fixBox">
			用户名：<input type="text" />
		</view>
		<view class="fixBox">
			密码：<input password />
		</view>
		<view class="fixBox">
			再次输入密码：<input password />
		</view>
		<view class="fixBox">
			<button>注册</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
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
	.regiBox{
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

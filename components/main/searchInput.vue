<template>
	<view>
		<uni-nav-bar color="#FFFFFF" background-color="transparent" fixed="true" right-icon="scan" @click-left="showCity"
		@click-right="scan">
			<block slot="left">
				<view class="city">
					<text>{{city}}</text>
					<uni-icon type="arrowdown" color="#FFFFFF" size="22"></uni-icon>
				</view>
			</block>
			<view class="input-view">
				<uni-icon type="search" size="22" color="#000"></uni-icon>
				<input confirm-type="search" @confirm="confirm" @tap="clickInput" class="input" type="text" placeholder="输入搜索关键词" disabled=""/>
			</view>
		</uni-nav-bar>
	</view>
	
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar.vue'
	import uniIcon from '../../components/uni-icon.vue'
	export default {
		props:{
			city:{
				type:String,
				default:"北京"
			}
		},
			components: {
				uniNavBar,
				uniIcon
			},
			
			methods: {
				clickInput(){
					uni.showToast({
						title: 'input'
					})
				},
				clickLeft() {
					uni.showToast({
						title: '左侧按钮'
					})
				},
				search() {
					uni.showToast({
						title: '搜索'
					})
				},
				showCity() {
					uni.showToast({
						title: '选择城市'
					})
				},
				scan() {
					uni.showToast({
						title: '扫码'
					})
				},
				confirm() {
					uni.showToast({
						title: '搜索'
					})
				}
			},
			
		}
			
</script>

<style>
.city {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-left:8px;
		color:white;
	}

	.input-view {
		width: 92%;
		display: flex;
		background-color: #fff;
		height: 30px;
		border-radius: 15px;
		padding: 0 4%;
		flex-wrap:nowrap;
		margin:7px 0;
		line-height:30px;
	}
	
	.input-view .uni-icon{
		line-height:30px !important;
	}

	.input-view .input {
		height:30px;
		line-height:30px;
		width:94%;
		padding: 0 3%;
	}
</style>

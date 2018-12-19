<template>
	<view>
		<searchInput :city="city"></searchInput>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" class="swiper">
            <swiper-item v-for="item in swiperList" :key="item">
                <text>{{item}}</text>
            </swiper-item>
        </swiper>
	</view>
</template>

<script>
	import searchInput from  '../../components/main/searchInput.vue'
	export default {
		components: {
			searchInput,
			
		},
		data() {
			return {
				city:"上海",
				indicatorDots: false,
				autoplay: false,
				interval: 5000,
				duration: 1000,
				swiperList: [
					'item1',
					'item2',
					'item3'
				],
			}
		},
		methods: {
			
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			setTimeout(function() {
				uni.stopPullDownRefresh()
				console.log('stopPullDownRefresh')
			}, 1000)
		}
	}
</script>

<style>
	.swiper{
		height: 300upx;
		width: 100%;
		color:white;
		/* line-height: 300upx; */
		background-color: red;
	}
</style>

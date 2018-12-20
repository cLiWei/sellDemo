<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "common/uni.css";
	/*每个页面公共css */
	html{
		background-color: #eee;
		height: 100%;
		width: 100%;
	}
	body{
		height: 100%;
		width: 100%;
	}
</style>

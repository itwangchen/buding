<script>
	import {loadScript} from './uitl/utils'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//#ifdef H5
				console.log(loadScript,'插入百度地图');
				loadScript();
			//#endif			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

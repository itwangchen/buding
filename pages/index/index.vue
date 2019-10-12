<template>
	<view v-cloak class="container">
		<view style='margin-top: -150rpx; padding-top: 150rpx;'>
			<view class='animation-view'>
				<view class='location' @click="chooseLocation">
					<myicon class="icon" icon="dingwei"></myicon>
					<text class='city'>{{position}}</text>
				</view>
				<!-- <canvas canvas-id='animation' style='width:100%;height:920rpx;position: absolute;top:100rpx'></canvas> -->
				<view class="center-container">
					<view class="flex-content-left">
						<!-- 	<view class="pm-number-view" v-if="airQuality.color">
							<text :style="'display:inline-block;width: 8rpx;border:8rpx solid '+airQuality.color+';border-radius: 6rpx;height: 22rpx;margin-right:12rpx;box-sizing:border-box'"></text>
							<text style="line-height: 60rpx;font-size:26rpx;color:white">{{airQuality.airText}}   {{airQuality.aqi}}</text>
						</view> -->
						<view class="today-weather-view" v-if="todayData.iconTypeBai">
							<text style="text-align:center;font-size:32rpx;color:white;height:50rpx">
								今 天
							</text>
							<text style="text-align:center;font-size:32rpx;color:white">
								{{todayData.dateTxt}}
							</text>
							<view style="text-align:center;color:white">
								<myicon class="icon" style="color: white; font-size:32rpx" :icon="todayData.iconTypeBai"></myicon>
								<text style='font-size:32rpx'>{{todayData.tmp_min}}/{{todayData.tmp_max}}</text>
							</view>
						</view>
					</view>
					<view class="flex-content-center" v-if="liveWeather.iconType">
						<view class="temp-out-content">
							<text class="today-temp">{{liveWeather.fl}}</text>
							<text class="temp-symbol">℃</text>
						</view>
						<myicon class="icon" :icon="liveWeather.iconType"></myicon>
						<text class="today-temp-bottom">{{liveWeather.cond_txt}}</text>
						<view class="temp-out-content__bottom">
							<view class="flex-center__left">
								<text class="home-text ">湿度: {{liveWeather.hum}}%</text>
								<text class="home-text">风力：{{liveWeather.wind_sc}}级</text>
							</view>
							<view class="flex-center__right">
								<view class="home-text out-scroll-text">
									<text class='scroll-text'>{{warmPrompt}}</text>
								</view>

							</view>
						</view>
					</view>
					<view class="flex-content-right" v-if="tomorrowData.iconTypeBai">
						<view class="today-weather-view">
							<text style="text-align:center;font-size:32rpx;color:white;height:50rpx">
								明 天
							</text>
							<text style="text-align:center;font-size:32rpx;color:white">
								{{tomorrowData.dateTxt}}
							</text>
							<view style="text-align:center;color:white">
								<myicon class="icon" style="color: white;font-size:32rpx" :icon="tomorrowData.iconTypeBai"></myicon>
								<text style='font-size:32rpx'>{{tomorrowData.tmp_min}}/{{tomorrowData.tmp_max}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="all-day-list">
					<scroll-view class="scroll-view_x" scroll-x style="overflow:hidden;width:auto;height:100%">
						<view class="all-day-list-item" v-for="(item) in everyHourData" :key="item.time">
							<view class="day-list-item">{{item.time}}点</view>
							<view class="day-list-item">
								<myicon style="color:white;font-size:36rpx" :icon="item.iconType"></myicon>
							</view>
							<view class="day-list-item">{{item.tmp}}°</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="one-week-list">
				<view class="one-week-list-item" v-for="(item) in everyWeekData" :key="item.weekday">
					<view class="week-list-item" style="font-size: 28rpx">
						<view>{{item.weekday}}</view>
						<view>{{item.date}}</view>
					</view>
					<view class="week-list-item">{{item.cond_txt_d}}</view>
					<view class="week-list-item">
						<myicon style="color:white;font-size:44rpx" :icon="item.iconTypeBai"></myicon>
					</view>
					<view class="week-list-item">{{item.tmp_min}}~{{item.tmp_max}}°</view>
					<view class="week-list-item">
						<myicon style="color:white;font-size:44rpx" :icon="item.iconTypeYe"></myicon>
					</view>
					<view class="week-list-item">{{item.cond_txt_n}}</view>
					<view class="week-list-item" style="font-size: 28rpx">
						<view>{{item.wind_dir == '无持续风向' ? '无' : item.wind_dir}}</view>
						<view>{{item.wind_sc}}级</view>
					</view>
				</view>

			</view>

			<view class='live-index-view'>
				<view class='live-index-item'>
					<view class='live-index-item-left'>
						<view class='live-index-top-txt'>
							<text>日出</text>
						</view>
						<view class='live-index-bottom-txt'>
							<text>{{todayData.sr}}</text>
						</view>
					</view>
					<view class='live-index-item-right'>
						<view class='live-index-top-txt'>
							<text>日落</text>
						</view>
						<view class='live-index-bottom-txt'>
							<text>{{todayData.ss}}</text>
						</view>
					</view>
				</view>
				<view class='live-index-item'>
					<view class='live-index-item-left'>
						<view class='live-index-top-txt'>
							<text>降雨概率</text>
						</view>
						<view class='live-index-bottom-txt'>
							<text>{{todayData.pop}}%</text>
						</view>
					</view>
					<view class='live-index-item-right'>
						<view class='live-index-top-txt'>
							<text>风向角度</text>
						</view>
						<view class='live-index-bottom-txt'>
							<text>{{todayData.wind_deg}}°</text>
						</view>
					</view>
				</view>
				<view class='live-index-item'>
					<view class='live-index-item-left'>
						<view class='live-index-top-txt'>
							<text>风速</text>
						</view>
						<view class='live-index-bottom-txt'>
							<text>{{todayData.wind_spd}} <text style='font-size: 28rpx'>公里/小时</text></text>
						</view>
					</view>
					<view class='live-index-item-right'>
						<view class='live-index-top-txt'>
							<text>能见度</text>
						</view>
						<view class='live-index-bottom-txt'>
							<text>{{todayData.vis}} <text style='font-size: 28rpx'>公里</text></text>
						</view>
					</view>
				</view>
				<view class='live-index-item'>
					<view class='live-index-item-left'>
						<view class='live-index-top-txt'>
							<text>月升时间</text>
						</view>
						<view class='live-index-bottom-txt'>
							<text>{{todayData.mr}}</text>
						</view>
					</view>
					<view class='live-index-item-right'>
						<view class='live-index-top-txt'>
							<text>月落时间</text>
						</view>
						<view class='live-index-bottom-txt'>
							<text>{{todayData.ms}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class='last-view'>
				<view class='last-view-item' v-for="(item) in lifeStyle" :key="item.type">
					<view class='last-view-item-top'>{{lifeEnum[item.type]}}</view>
					<view class='last-view-item-bottom'>{{item.brf}}</view>
					<view class="home-text out-scroll-text">
						<text class='scroll-text'>{{item.txt}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- </scroll-view> -->
	</view>
</template>

<script>
	import config from '../../uitl/config'
	import {
		getPosition,
		getWeaterInfo,
		getEveryHoursWeather,
		getWeekWeather,
		getAirQuality,
		getWeatherLive,
		getLifeStyle
	} from '../../uitl/api'
	import myicon from '../../components/icon.vue'
	import {
		weekEnum as weekday,
		airQuailtyLevel,
		arrForAirColor,
		lifeIndexEnum,
		iconType,
		rainType,
		snowType,
		initialize,
		loadScript
	} from '../../uitl/utils'
	import Rain from '../../class/Rain.js'
	import Snow from '../../class/Snow.js'
	const bdMapKey = config.BD_Map_Key
	export default {
		components: {
			myicon
		},
		data() {
			return {
				bgImgUrl: '/static/images/cloud.jpg',
				location: {
					x: '116.40',
					y: '39.9',
					name: '北京市'
				},
				position: '正在获取位置...',
				todayData: {},
				tomorrowData: {},
				everyHourData: [],
				everyWeekData: [],
				airQuality: {},
				liveWeather: {},
				lifeStyle: [],
				lifeEnum: lifeIndexEnum,
				iconTypeObj: iconType,
				warmPrompt: '',
				width: 0,
				canvasHeight: 320,
				scole: 0,
				canvas_instance: null,
				apl: 0,
				rain_ins: null,
				snow_ins: null
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					console.log(res, '设备');
					this.width = res.windowWidth;
					this.scole = res.windowWidth / 375;
					// this.canvas_instance = uni.createCanvasContext('animation');
				},
			})
			this.getPosition()

		},
		onShow() {
		},
		methods: {
			getPosition: function() {
				console.log(255);
				uni.getLocation({
					// #ifdef MP-WEIXIN
					// type: 'wgs84',
					type: 'gcj02',
					// #endif
					success: this.updateLocation,
					fail: err => {
						console.log(err, 'uni.getLocation')
					}
				})
			},
			getData: function(lat, lon) {
				uni.showLoading({
					title: '加载中',
				})
				Promise.all([this.getWeather(lat, lon), this.getAir(lat, lon), this.getHourWeather(lat, lon), this.getWeatherForWeek(
					lat, lon), this.getLifeIndex(lat, lon)]).then(res => {
					uni.hideLoading();
					uni.stopPullDownRefresh()
				})
			},
			updateLocation: function(res) {
				console.log(res, '获取用户位置');
				if (this.rain_ins) {
					this.rain_ins.stop()
				}
				if (this.snow_ins) {
					this.snow_ins.stop()
				}
				let {
					latitude: x,
					longitude: y,
					name
				} = res;
				let data = {
					location: {
						x,
						y,
						name: name || '北京市'
					},
					rain_ins: null,
					snow_ins: null
				};
				this.data = data;
				// this.getData(x, y);
				this.getLocation(x, y, name);
			},

			chooseLocation: function() {
				uni.chooseLocation({
					success: res => {
						let {
							latitude,
							longitude
						} = res
						let {
							x,
							y
						} = this.location
						if (latitude == x && longitude == y) {

						} else {
							// this.updateLocation(res)
							this.getLocation(latitude,longitude);
							console.log(res,'选择地址 ');
							// this.getData(lat, lon);
						}
					}
				})
			},

			getLocation: function(lat, lon) {
				uni.showLoading({
					title: "定位中",
					mask: true
				})				
				getPosition(lat, lon, (res) => {
					console.log(res, 'formatted_addresses')
					if (res.statusCode == 200) {
						let response = res.data.result
						let addr = response.formatted_addresses.recommend || response.rough
						this.position = addr;
						uni.hideLoading()
						this.getData(lat, lon);
					}
				}, (err => {
					console.log(err)
					uni.hideLoading()
				}))
				// this.position = name;
				// this.getData(lat, lon);
			},
			getWeather: function(lat, lon) {
				if (!lat || !lon) {
					return
				}
				getWeatherLive(lat, lon, res => {
					// console.log(res, 'cond_code')
					let data = res.data.HeWeather6[0].now;
					data.iconType = this.iconTypeObj[data.cond_code]
					let hour = new Date().getHours()
					let apl = 0
					if (hour < 18 && hour >= 6) {
						apl = 0
					} else {
						apl = 0.6
					}
					this.liveWeather = data;
					this.apl = apl;
					let canvas_count = 0
					let {
						width,
						canvasHeight,
						scole
					} = this
					if (data.cond_code >= 300 && data.cond_code < 400) {
						canvas_count = rainType[data.cond_code]
						this.rain_ins = new Rain(this.canvas_instance, width, canvasHeight * scole, {
							counts: canvas_count,
							speedCoefficient: 0.03
						})
						this.rain_ins.start()
					} else if (data.cond_code >= 400 && data.cond_code < 500) {
						canvas_count = rainType[data.cond_code]
						this.setData({
							snow_ins: new Snow(this.canvas_instance, width, canvasHeight * scole, {
								counts: canvas_count,
								speedCoefficient: 0.03
							})
						})
						this.snow_ins.start()
					}
				}, err => {
					console.log(err);
				})
			},
			getHourWeather: function(lat, lon) {
				if (!lat || !lon) {
					return
				}
				getEveryHoursWeather(lat, lon, res => {
					let data = res.data.HeWeather6[0].hourly;
					let arrData = [];
					data.forEach(item => {
						let d = {};
						d.time = item.time.split(" ")[1].split(":")[0];
						if (typeof d.time == 'string') {
							if (d.time.charAt(0) == '0') {
								let str = d.time;
								d.time = str.substring(1)
							}
						}
						d.iconType = this.iconTypeObj[item.cond_code];
						d.tmp = item.tmp;
						arrData.push(d);
					});
					this.everyHourData = arrData
					console.log(arrData, 'arrData');
				}, err => {
					console.log(err)
				})
			},
			getWeatherForWeek: function(lat, lon) {
				if (!lat || !lon) {
					return
				}
				getWeekWeather(lat, lon, res => {
					let data = res.data.HeWeather6[0].daily_forecast;
					for (let i = 0; i < data.length; i++) {
						data[i].weekday = weekday[(new Date(data[i].date)).getDay()]
						let date = data[i].date;
						let arr = date.split('-')
						arr.shift()
						data[i].date = arr.join('/')
						data[i].dateTxt = `${arr[0]}月${arr[1]}日`
						data[i].iconTypeBai = this.iconTypeObj[data[i].cond_code_d]
						data[i].iconTypeYe = this.iconTypeObj[data[i].cond_code_n]
					}
					data[0].weekday = '今 天'
					data[1].weekday = '明 天'
					data[2].weekday = '后 天'
					this.everyWeekData = data;
					this.todayData = { ...data[0]
					};
					this.tomorrowData = { ...data[1]
					};
				}, fail => {

				})
			},
			getAir: function(lat, lon) {
				if (!lat || !lon) {
					return
				}
				// getAirQuality(lat, lon, res => {
				// 	let data = res.data.HeWeather6[0].air_now_city
				// 	console.log(res.data, 'getAirQuality')
				// 	let value = data.aqi
				// 	let keys = Object.keys(airQuailtyLevel)
				// 	for (let i = 0; i < keys.length; i++) {
				// 		if (Number(value) <= Number(keys[i])) {
				// 			data.color = arrForAirColor[i];
				// 			data.airText = airQuailtyLevel[keys[i]];
				// 			break;
				// 		}
				// 	}
				// 	this.airQuality = data;
				// 	console.log(data,'空气质量')
				// }, err => {
				// 	console.log(err)
				// })
			},
			getLifeIndex: function(lat, lon) {
				if (!lat || !lon) {
					return
				}
				getLifeStyle(lat, lon, res => {
					let data = [];
					let result = res.data.HeWeather6[0].lifestyle
					let keys = Object.keys(lifeIndexEnum)
					keys.forEach(item => {
						var filterItem = result.filter(v => {
							return v.type == item;
						})
						if (filterItem.length != 0) {
							data.push(filterItem[0])
						}
					})
					this.lifeStyle = data
					this.warmPrompt = data[0].txt
				}, err => {

				})
			},

		}
	}
</script>

<style>
	.container {
		background-image: linear-gradient(to top, rgb(51, 8, 103) 0%, rgb(48, 207, 208) 100%);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		display: block;
	}

	.location {
		width: 100%;
		font-size: 28rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: left;
		padding-left: 40rpx;
		box-sizing: border-box;
		position: relative;
		z-index: 10000;
	}

	.city,
	.icon {
		color: rgba(236, 240, 241, 1.0);
		display: inline-block;
		vertical-align: top;
	}

	.city {
		max-width: 60%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.center-container {
		display: flex;
		/* margin-top: 100rpx; */
		justify-content: center;
		flex-direction: row;
		height: 500rpx;
		width: 100%;
		box-sizing: border-box;
	}

	.flex-content-left,
	.flex-content-right {
		height: 100%;
		width: 25%;
		width: 200rpx;
	}

	.flex-content-center {
		height: 100%;
		width: 50%;
		text-align: center;
		justify-content: center;
		justify-items: center;
	}

	.temp-out-content {
		margin-top: 0rpx;
		padding-left: 30rpx;
	}

	.today-temp {
		display: inline-block;
		font-size: 200rpx;
		color: white;
		vertical-align: top;
		padding: 0;
	}

	.today-temp-bottom {
		text-align: center;
		font-size: 36rpx;
		color: #f5f6fa;
	}

	.temp-symbol {
		display: inline-block;
		font-size: 36rpx;
		vertical-align: top;
		color: white;
		position: relative;
		top: 30rpx;
	}

	.temp-out-content__bottom {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 170rpx;
	}

	.flex-center__left,
	.flex-center__right {
		height: 50%;
	}

	.flex-center__left {
		/* background: green; */
		display: flex;
	}

	.flex-center__right {
		/* background: greenyellow; */
	}

	.home-text {
		font-size: 32rpx;
		line-height: 85rpx;
		flex: 1;
		color: white;
		overflow: hidden;
		box-sizing: border-box;
	}

	.out-scroll-text {
		margin: 0 20rpx;
	}

	.scroll-text {
		display: inline-block;
		width: auto;
		white-space: nowrap;
		animation: tipsScroll 8s linear infinite;
		-webkit-animation: tipsScroll 8s linear infinite;
	}

	.pm-number-view {
		position: absolute;
		left: 0;
		top: 200rpx;
		height: 60rpx;
		padding-left: 30rpx;
		padding-right: 20rpx;
		text-align: center;
		background: rgba(1, 2, 3, 0.2);
		border-radius: 30rpx;
		transform: translate(-20rpx, 0rpx);
	}

	.today-weather-view {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 265rpx;
		justify-items: center;
	}

	.all-day-list {
		margin-top: 20rpx;
		width: 100%;
		height: 220rpx;
		background: rgba(1, 2, 3, 0.3);
		padding: 10rpx 0rpx;
		overflow: hidden;
		white-space: nowrap;
		color: white;
		font-size: 32rpx;
		box-sizing: border-box;
	}

	.all-day-list-item {
		width: 93.75rpx;
		height: 100%;
		display: inline-block;
		text-align: center;
		vertical-align: top;
	}

	.day-list-item {
		width: 100%;
		height: 33.33%;
		margin-top: 6rpx;
	}

	.one-week-list {
		width: 100%;
		box-sizing: border-box;
		height: 880rpx;
		background: rgba(1, 2, 3, 0.3);
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		color: white;
		font-size: 30rpx;
	}

	.one-week-list-item {
		flex: 1;
		height: 100%;
		text-align: center;
		box-sizing: border-box;
		padding: 20rpx 0rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		vertical-align: middle;
	}

	.week-list-item {
		flex: 1;
		box-sizing: border-box;
		width: 100%;
		vertical-align: middle;
		padding-top: 26rpx;
	}

	.live-index-view {
		width: 100%;
		height: 480rpx;
		margin-top: 30rpx;
		box-sizing: border-box;
		color: white;
		background: rgba(1, 2, 3, 0.2);
	}

	.live-index-item {
		width: 100%;
		height: 118rpx;
		/* border-top: 1rpx solid #357588; */
	}

	.live-index-item:nth-last-child(1) {
		/* border-bottom: 1rpx solid #357588; */
	}

	.live-index-item-left {
		box-sizing: border-box;
		width: 50%;
		height: 100%;
		display: inline-block;
	}

	.live-index-item-right {
		box-sizing: border-box;
		width: 50%;
		height: 100%;
		display: inline-block;
	}

	.live-index-top-txt {
		box-sizing: border-box;
		width: 100%;
		height: 50rpx;
		padding-left: 30rpx;
		font-size: 28rpx;
		line-height: 50rpx;
	}

	.live-index-bottom-txt {
		box-sizing: border-box;
		width: 100%;
		height: 68rpx;
		padding-left: 30rpx;
		font-size: 60rpx;
		line-height: 68rpx;
	}

	.last-view {
		margin-top: 30rpx;
		width: 100%;
		box-sizing: border-box;
		background: rgba(1, 2, 3, 0.2);
		color: white;
	}

	.last-view-item {
		width: 50%;
		height: 41vw;
		overflow: hidden;
		overflow: hidden;
		text-overflow: ellipsis;
		/* background: red; */
		display: inline-block;
		text-align: center;
		vertical-align: middle;
	}

	.last-view-item .scroll-text {
		font-size: 24rpx;
		word-wrap: break-word;
		white-space: normal;
		animation: tipsScroll 0s linear infinite;
		-webkit-animation: tipsScroll 0s linear infinite;
	}

	.last-view-item .home-text {
		line-height: 40rpx;
	}

	.last-view-item .out-scroll-text {
		margin: 0 22rpx;
		overflow-y: scroll;
	}

	.last-view-item .scroll-text text {}

	.last-view-item-top {
		width: 100%;
		height: 8vw;
		line-height: 8vw;
		margin-top: 4.5vw;
		font-size: 24rpx;
		color: #bdc3c7;
	}

	.last-view-item-bottom {
		width: 100%;
		height: 8vw;
		line-height: 8vw;
		font-size: 32rpx;
	}


	@keyframes tipsScroll {
		0% {
			transform: translate(10%);
		}

		100% {
			transform: translate(-100%);
		}
	}

	@-webkit-keyframes tipsScroll {
		0% {
			transform: translate(10%);
		}

		100% {
			transform: translate(-100%);
		}
	}
</style>

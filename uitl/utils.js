import config from '../uitl/config'
const bdMapKey = config.BD_Map_Key
export const weekEnum = {
	0: '星期日',
	1: '星期一',
	2: '星期二',
	3: '星期三',
	4: '星期四',
	5: '星期五',
	6: '星期六',
}

export const airQuailtyLevel = {
	50: '优',
	100: '良',
	150: '轻度污染',
	200: '中度污染',
	250: '重度污染',
	300: '严重污染',
}

export const arrForAirColor = ['green', 'blue', 'orange', 'red', 'purple', 'maroon']

export const lifeIndexEnum = {
	comf: '舒适度指数',
	cw: '洗车指数',
	drsg: '穿衣指数',
	flu: '感冒指数',
	sport: '运动指数',
	trav: '旅游指数',
	uv: '紫外线指数',
	air: '空气污染',
	airc: '晾晒指数',
	ag: '过敏指数',
	mu: '化妆指数',
	ptfc: '交通指数',
}

export const iconType = {
	100: 'qingbai',
	101: 'duoyunbai',
	102: 'duoyunbai',
	103: 'duoyunbai',
	104: 'yin',
	200: 'fengli',
	201: 'qing',
	202: 'fengli',
	203: 'fengli',
	204: 'fengli',
	205: 'fengli',
	206: 'fengli',
	207: 'fengli',
	208: 'fengli',
	209: 'fengli',
	210: 'fengli',
	211: 'fengli',
	212: 'fengli',
	213: 'fengli',
	300: 'zhenyubai',
	301: 'zhenyubai',
	302: 'leizhenyu',
	303: 'leizhenyu',
	304: 'leizhenyuzhaunbingbao',
	305: 'xiaoyu',
	306: 'zhongyu',
	307: 'dayu',
	308: 'zhongyu',
	309: 'xiaoyu',
	310: 'baoyu',
	311: 'dabaoyu',
	312: 'tedabaoyu',
	313: 'dongyu',
	314: 'zhongyu',
	315: 'dayu',
	316: 'baoyu',
	317: 'baoyu',
	318: 'tedabaoyu',
	399: 'xiaoyu',
	400: 'xiaoxue',
	401: 'zhongyue',
	402: 'daxue',
	403: 'baoxue',
	404: 'yujiaxue',
	405: 'yujiaxue',
	406: 'yujiaxue',
	407: 'zhenxuebai',
	408: 'zhongxue',
	409: 'daxue',
	410: 'baoxue',
	499: 'xiaoxue',
	500: 'wu',
	501: 'wu',
	502: 'wumaibai',
	503: 'yangsha',
	504: 'fuchen',
	507: 'shachenbao',
	508: 'qiangshachenbao',
	509: 'wu',
	510: 'wu',
	511: 'wumaibai',
	512: 'wumaibai',
	513: 'wumaibai',
	514: 'wu',
	515: 'wu'
}

export const rainType = {
	300: 80,
	301: 100,
	302: 80,
	303: 100,
	304: 100,
	305: 20,
	306: 40,
	307: 60,
	308: 20,
	309: 10,
	310: 180,
	311: 220,
	312: 250,
	313: 40,
	314: 30,
	315: 50,
	316: 100,
	317: 150,
	318: 180,
	399: 20,
}

export const snowType = {
	400: 40,
	401: 80,
	402: 120,
	403: 160,
	404: 80,
	405: 80,
	406: 120,
	407: 120,
	408: 80,
	409: 100,
	410: 140,
	499: 30,
}
export const initialize = function(x, y, call) {
	let gc = new window.BMap.Geocoder();
	let pointAdd = new window.BMap.Point(x, y);
	console.log('pointAdd',x,y,pointAdd);
	gc.getLocation(pointAdd, function(res) {
		console.log(res, 'initialize');
		call(res);
	});
}
//创建标签一如百度地图包
export const loadScript= function () {
	console.log(1,bdMapKey);
	var script = document.createElement('script');
	script.src = "https://api.map.baidu.com/api?v=2.0&ak=" + bdMapKey;
	document.body.appendChild(script);
}
// exports={
// 	weekEnum,
// 	airQuailtyLevel,
// 	arrForAirColor,
// 	lifeIndexEnum,
// 	iconType,
// 	rainType,
// 	snowType,
// 	initialize,
// 	loadScript
// }
(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function o(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];console[t].apply(console,i)}function s(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var o=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[o].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(a){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),r="";if(s.length>1){var c=s.pop();r=s.join("---COMMA---"),0===c.indexOf(" at ")?r+=c:r+="---COMMA---"+c}else r=s[0];console[o](r)}i.r(e),i.d(e,"log",(function(){return o})),i.d(e,"default",(function(){return s}))},"227e":function(t,e,i){"use strict";i.r(e);var n=i("e469");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);var o,s,r,c,u=i("f0c5"),l=Object(u["a"])(n["default"],o,s,!1,null,null,null,!1,r,c);e["default"]=l.exports},"2e9a":function(t,e,i){"use strict";i.r(e);var n=i("e8c3"),a=i("c05e");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},"37c6":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("8e91"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function c(t){return function(){var e,i=d(t);if(f()){var n=d(this).constructor;e=Reflect.construct(i,arguments,n)}else e=i.apply(this,arguments);return u(this,e)}}function u(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}var v=function(e){_(n,e);var i=c(n);function n(){return o(this,n),i.apply(this,arguments)}return r(n,[{key:"_init",value:function(){var e=this.width,i=this.height;t("log",e," at class/Snow.js:8");var n=this.opt.colors||["#ccc","#eee","#fff","#ddd"],a=this.opt.counts||100,o=this.opt.speedCoefficient||.03,s=o*i*.15,r=this.opt.radius||2;this.animationArray=[];for(var c=this.animationArray,u=0;u<a;u++)c.push({x:Math.random()*e,y:Math.random()*i,ox:Math.random()*e,ys:Math.random()+s,r:Math.floor(Math.random()*(r+.5)+.5),color:n[Math.floor(Math.random()*n.length)],rs:80*Math.random()});t("log",c," at class/Snow.js:30")}},{key:"_drawing",value:function(){var t=this.animationArray,e=this.context;e.clearRect(0,0,this.width,this.height);for(var i=0;i<t.length;i++){var n=t[i],a=n.x,o=n.y,s=n.r,r=n.color;e.beginPath(),e.arc(a,o,s,0,2*Math.PI,!1),e.setFillStyle(r),e.fill(),e.closePath()}e.draw(),this._update()}},{key:"_update",value:function(){for(var t=this.width,e=this.height,i=this.animationArray,n=this.opt.speedCoefficient/10,a=0;a<i.length;a++){var o=i[a],s=o.ox,r=o.ys;o.rs+=n,o.x=s+Math.cos(o.rs)*t/2,o.y+=r,(o.x>t||o.y>e)&&(o.x=Math.random()*t,o.y=-10)}}}]),n}(n.default),y=v;e.default=y}).call(this,i("0de9")["default"])},"48cc":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLifeStyle=e.getWeatherLive=e.getAirQuality=e.getWeekWeather=e.getEveryHoursWeather=e.getWeaterInfo=e.getPosition=void 0;var n=a(i("d666"));function a(t){return t&&t.__esModule?t:{default:t}}var o=n.default.MAP_API_KEY,s=n.default.WEATHER_API_KEY,r=(n.default.H5_Map_Key,"https://apis.map.qq.com/ws/geocoder/v1/"),c="https://free-api.heweather.net/s6/weather/forecast",u="https://free-api.heweather.net/s6/weather/hourly",l="https://free-api.heweather.net/s6/weather/forecast",f="https://free-api.heweather.net/s6/air/now",d="https://free-api.heweather.net/s6/weather/now",_="https://free-api.heweather.net/s6/weather/lifestyle",p=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return uni.request({url:r,header:{"Content-Type":"application/json"},data:{location:"".concat(t,",").concat(e),key:o,get_poi:0},success:i,fail:n})};e.getPosition=p;var v=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return uni.request({url:c,header:{"Content-Type":"application/json"},data:{location:"".concat(t,",").concat(e),lang:"zh",unit:"m",key:s},success:i,fail:n})};e.getWeaterInfo=v;var y=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return uni.request({url:u,header:{"Content-Type":"application/json"},data:{location:"".concat(t,",").concat(e),lang:"zh",unit:"m",key:s},success:i,fail:n})};e.getEveryHoursWeather=y;var h=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return uni.request({url:l,header:{"Content-Type":"application/json"},data:{location:"".concat(t,",").concat(e),lang:"zh",unit:"m",key:s},success:i,fail:n})};e.getWeekWeather=h;var g=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return uni.request({url:f,header:{"Content-Type":"application/json"},data:{location:"".concat(t,",").concat(e),lang:"zh",unit:"m",key:s},success:i,fail:n})};e.getAirQuality=g;var w=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return uni.request({url:d,header:{"Content-Type":"application/json"},data:{location:"".concat(t,",").concat(e),lang:"zh",unit:"m",key:s},success:i,fail:n})};e.getWeatherLive=w;var m=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return uni.request({url:_,header:{"Content-Type":"application/json"},data:{location:"".concat(t,",").concat(e),lang:"zh",unit:"m",key:s},success:i,fail:n})};e.getLifeStyle=m},"73ad":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=l(i("d666")),a=l(i("a82c")),o=i("48cc"),s=l(i("c710")),r=i("87e1"),c=l(i("7ebd")),u=l(i("37c6"));function l(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){_(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}n.default.BD_Map_Key;var p={components:{myicon:s.default},data:function(){return{bgImgUrl:"/static/images/cloud.jpg",location:{x:"116.40",y:"39.9",name:"北京市"},position:"正在获取位置...",todayData:{},tomorrowData:{},everyHourData:[],everyWeekData:[],airQuality:{},liveWeather:{},lifeStyle:[],lifeEnum:r.lifeIndexEnum,iconTypeObj:r.iconType,warmPrompt:"",width:0,canvasHeight:320,scole:0,canvas_instance:null,apl:0,rain_ins:null,snow_ins:null}},onLoad:function(e){var i=this;t("log",e,"页面参数"," at pages/index/index.vue:252"),uni.getSystemInfo({success:function(e){t("log",e,"设备"," at pages/index/index.vue:255"),i.width=e.windowWidth,i.scole=e.windowWidth/375}}),this.getPosition()},onShow:function(){},methods:{doTTS:function(){var e="",i=this.lifeStyle,n=this.lifeEnum;i.forEach((function(t){e+=n[t.type]+","+t.brf+","})),t("log","音频开始播放了",e," at pages/index/index.vue:274"),(0,a.default)({voiceSet:{tex:e},audioSet:{volume:1},audioCallback:{onPlay:function(){t("log","开始播放了"," at pages/index/index.vue:285")}},lineUp:!0,returnAudio:!1})},handeleUpdate:function(){uni.showModal({title:"版本更新",content:"有新的版本发布，\n检测到您当前为Wifi连接，是否立即进行新版本下载？",confirmText:"立即更新",cancelText:"稍后进行",success:function(e){if(e.confirm){uni.showToast({icon:"none",mask:!0,title:"有新的版本发布，\n检测到您目前为Wifi连接，\n程序已启动自动更新。新版本下载完成后将自动弹出安装程序",duration:5e3});var i="http://m.test.yyhealth.com/a/com.yyhealth.strawberry_1.4.1_141.apk",n=plus.downloader.createDownload(i,{},(function(t,e){200==e?plus.runtime.install(plus.io.convertLocalFileSystemURL(t.filename),{},{},(function(t){uni.showToast({title:"安装失败",duration:1500})})):uni.showToast({title:"更新失败",duration:1500})}));n.start()}else e.cancel&&t("log","稍后更新"," at pages/index/index.vue:326")}})},getPosition:function(){t("log",255," at pages/index/index.vue:332");var e="wgs84";e="gcj02",t("log",e,"getType"," at pages/index/index.vue:337"),uni.getLocation({type:"gcj02",success:this.updateLocation,fail:function(e){t("log",e,"uni.getLocation"," at pages/index/index.vue:343")}})},getData:function(t,e){uni.showLoading({title:"加载中"}),Promise.all([this.getWeather(t,e),this.getAir(t,e),this.getHourWeather(t,e),this.getWeatherForWeek(t,e),this.getLifeIndex(t,e)]).then((function(t){uni.hideLoading(),uni.stopPullDownRefresh()}))},updateLocation:function(e){t("log",e,"获取用户位置"," at pages/index/index.vue:358"),this.rain_ins&&this.rain_ins.stop(),this.snow_ins&&this.snow_ins.stop();var i=e.latitude,n=e.longitude,a=e.name,o={location:{x:i,y:n,name:a||"北京市"},rain_ins:null,snow_ins:null};this.data=o,this.getLocation(i,n,a)},chooseLocation:function(){var e=this;uni.chooseLocation({success:function(i){var n=i.latitude,a=i.longitude,o=e.location,s=o.x,r=o.y;n==s&&a==r||(e.getLocation(n,a),t("log",i,"选择地址 "," at pages/index/index.vue:400"))}})},getLocation:function(e,i){var n=this;t("log",e,i,"lat, lon",406," at pages/index/index.vue:408"),uni.showLoading({title:"定位中",mask:!0}),(0,o.getPosition)(e,i,(function(a){if(t("log",a,"formatted_addresses"," at pages/index/index.vue:414"),200==a.statusCode){var o=a.data.result;t("log",o," at pages/index/index.vue:417");var s=o.formatted_addresses.recommend||o.rough;n.position=s,uni.hideLoading(),n.getData(e,i)}}),(function(e){t("log",e,"421"," at pages/index/index.vue:424"),uni.hideLoading()}))},getWeather:function(e,i){var n=this;e&&i&&(0,o.getWeatherLive)(e,i,(function(t){var e=t.data.HeWeather6[0].now;e.iconType=n.iconTypeObj[e.cond_code];var i=(new Date).getHours(),a=0;a=i<18&&i>=6?0:.6,n.liveWeather=e,n.apl=a;var o=0,s=n.width,l=n.canvasHeight,f=n.scole;e.cond_code>=300&&e.cond_code<400?(o=r.rainType[e.cond_code],n.rain_ins=new c.default(n.canvas_instance,s,l*f,{counts:o,speedCoefficient:.03}),n.rain_ins.start()):e.cond_code>=400&&e.cond_code<500&&(o=r.rainType[e.cond_code],n.setData({snow_ins:new u.default(n.canvas_instance,s,l*f,{counts:o,speedCoefficient:.03})}),n.snow_ins.start())}),(function(e){t("log",e," at pages/index/index.vue:473")}))},getHourWeather:function(e,i){var n=this;e&&i&&(0,o.getEveryHoursWeather)(e,i,(function(e){var i=e.data.HeWeather6[0].hourly,a=[];i.forEach((function(t){var e={};if(e.time=t.time.split(" ")[1].split(":")[0],"string"==typeof e.time&&"0"==e.time.charAt(0)){var i=e.time;e.time=i.substring(1)}e.iconType=n.iconTypeObj[t.cond_code],e.tmp=t.tmp,a.push(e)})),n.everyHourData=a,t("log",a,"arrData"," at pages/index/index.vue:497")}),(function(e){t("log",e," at pages/index/index.vue:499")}))},getWeatherForWeek:function(t,e){var i=this;t&&e&&(0,o.getWeekWeather)(t,e,(function(t){for(var e=t.data.HeWeather6[0].daily_forecast,n=0;n<e.length;n++){e[n].weekday=r.weekEnum[new Date(e[n].date).getDay()];var a=e[n].date,o=a.split("-");o.shift(),e[n].date=o.join("/"),e[n].dateTxt="".concat(o[0],"月").concat(o[1],"日"),e[n].iconTypeBai=i.iconTypeObj[e[n].cond_code_d],e[n].iconTypeYe=i.iconTypeObj[e[n].cond_code_n]}e[0].weekday="今 天",e[1].weekday="明 天",e[2].weekday="后 天",i.everyWeekData=e,i.todayData=d({},e[0]),i.tomorrowData=d({},e[1])}),(function(t){}))},getAir:function(t,e){},getLifeIndex:function(t,e){var i=this;t&&e&&(0,o.getLifeStyle)(t,e,(function(t){var e=[],n=t.data.HeWeather6[0].lifestyle,a=Object.keys(r.lifeIndexEnum);a.forEach((function(t){var i=n.filter((function(e){return e.type==t}));0!=i.length&&e.push(i[0])})),i.lifeStyle=e,i.warmPrompt=e[0].txt}),(function(t){}))}}};e.default=p}).call(this,i("0de9")["default"])},"79fa":function(t,e,i){"use strict";i("d658");var n=o(i("8bbf")),a=o(i("227e"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}n.default.config.productionTip=!1,a.default.mpType="app";var u=new n.default(r({},a.default));u.$mount()},"7ebd":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("8e91"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function c(t){return function(){var e,i=d(t);if(f()){var n=d(this).constructor;e=Reflect.construct(i,arguments,n)}else e=i.apply(this,arguments);return u(this,e)}}function u(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}var v=function(t){_(i,t);var e=c(i);function i(){return o(this,i),e.apply(this,arguments)}return r(i,[{key:"_init",value:function(){this.context.setLineWidth(2),this.context.setLineCap("round");var t=this.height,e=this.width,i=this.opt.counts||100,n=this.opt.speedCoefficient,a=n*t;this.animationArray=[];for(var o=this.animationArray,s=0;s<i;s++){var r={x:Math.random()*e,y:Math.random()*t,len:2*Math.random(),xs:-1,ys:10*Math.random()+a,color:"rgba(255,255,255,0.1)"};o.push(r)}}},{key:"_drawing",value:function(){var t=this.animationArray,e=this.context;e.clearRect(0,0,this.width,this.height);for(var i=0;i<t.length;i++){var n=t[i];e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(n.x+n.len*n.xs,n.y+n.len*n.ys),e.setStrokeStyle(n.color),e.stroke()}return e.draw(),this.update()}},{key:"update",value:function(){for(var t=this.width,e=this.height,i=this.animationArray,n=0;n<i.length;n++){var a=i[n];a.x=a.x+a.xs,a.y=a.y+a.ys,(a.x>t||a.y>e)&&(a.x=Math.random()*t,a.y=-10)}}}]),i}(n.default),y=v;e.default=y},"87e1":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.loadScript=e.initialize=e.snowType=e.rainType=e.iconType=e.lifeIndexEnum=e.arrForAirColor=e.airQuailtyLevel=e.weekEnum=void 0;var n=a(i("d666"));function a(t){return t&&t.__esModule?t:{default:t}}var o=n.default.BD_Map_Key,s={0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"};e.weekEnum=s;var r={50:"优",100:"良",150:"轻度污染",200:"中度污染",250:"重度污染",300:"严重污染"};e.airQuailtyLevel=r;var c=["green","blue","orange","red","purple","maroon"];e.arrForAirColor=c;var u={comf:"舒适度指数",cw:"洗车指数",drsg:"穿衣指数",flu:"感冒指数",sport:"运动指数",trav:"旅游指数",uv:"紫外线指数",air:"空气污染",airc:"晾晒指数",ag:"过敏指数",mu:"化妆指数",ptfc:"交通指数"};e.lifeIndexEnum=u;var l={100:"qingbai",101:"duoyunbai",102:"duoyunbai",103:"duoyunbai",104:"yin",200:"fengli",201:"qing",202:"fengli",203:"fengli",204:"fengli",205:"fengli",206:"fengli",207:"fengli",208:"fengli",209:"fengli",210:"fengli",211:"fengli",212:"fengli",213:"fengli",300:"zhenyubai",301:"zhenyubai",302:"leizhenyu",303:"leizhenyu",304:"leizhenyuzhaunbingbao",305:"xiaoyu",306:"zhongyu",307:"dayu",308:"zhongyu",309:"xiaoyu",310:"baoyu",311:"dabaoyu",312:"tedabaoyu",313:"dongyu",314:"zhongyu",315:"dayu",316:"baoyu",317:"baoyu",318:"tedabaoyu",399:"xiaoyu",400:"xiaoxue",401:"zhongyue",402:"daxue",403:"baoxue",404:"yujiaxue",405:"yujiaxue",406:"yujiaxue",407:"zhenxuebai",408:"zhongxue",409:"daxue",410:"baoxue",499:"xiaoxue",500:"wu",501:"wu",502:"wumaibai",503:"yangsha",504:"fuchen",507:"shachenbao",508:"qiangshachenbao",509:"wu",510:"wu",511:"wumaibai",512:"wumaibai",513:"wumaibai",514:"wu",515:"wu"};e.iconType=l;var f={300:80,301:100,302:80,303:100,304:100,305:20,306:40,307:60,308:20,309:10,310:180,311:220,312:250,313:40,314:30,315:50,316:100,317:150,318:180,399:20};e.rainType=f;var d={400:40,401:80,402:120,403:160,404:80,405:80,406:120,407:120,408:80,409:100,410:140,499:30};e.snowType=d;var _=function(e,i,n){var a=new window.BMap.Geocoder,o=new window.BMap.Point(e,i);t("log","pointAdd",e,i,o," at uitl/utils.js:147"),a.getLocation(o,(function(e){t("log",e,"initialize"," at uitl/utils.js:149"),n(e)}))};e.initialize=_;var p=function(){t("log",1,o," at uitl/utils.js:155");var e=document.createElement("script");e.src="https://api.map.baidu.com/api?v=2.0&ak="+o,document.body.appendChild(e)};e.loadScript=p}).call(this,i("0de9")["default"])},"8bbf":function(t,e){t.exports=Vue},"8e91":function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s="stop",r="start",c=function(){function t(e,i,a){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};n(this,t),this.opt=o||{},this.context=e,this.timer=null,this.status=s,this.width=i,this.height=a,this._init()}return o(t,[{key:"_init",value:function(){}},{key:"_drawing",value:function(){}},{key:"start",value:function(){var t=this;if(this.status!==r)return this.status=r,this.timer=setInterval((function(){t._drawing()}),30),this}},{key:"stop",value:function(){return this.status=s,clearInterval(this.timer),this.timer=null,this}}]),t}(),u=c;e.default=u},"9b7f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["icon"],name:"icontype",data:function(){return{icontype:""}},mounted:function(){this.icontype="icon icon-"+this.icon}};e.default=n},a3e8:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("text",{class:t._$s(0,"c",t.icontype),attrs:{_i:0}})},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},a82c:function(t,e,i){"use strict";(function(t){function i(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var o=[],s=!1,r="https://tsn.baidu.com/text2audio";function c(){return new Promise((function(e,i){t("log","准备访问接口获取语音token"," at uitl/QS-baiduyy.js:14"),uni.request({url:"https://openapi.baidu.com/oauth/2.0/token",method:"POST",data:"grant_type=client_credentials&client_id=jtwoB9xzRnv3qltcfqL0pk1t&client_secret=A16UKHBKVeAh68kuGGSPqnemCVyPDmgb",header:{"content-type":"application/x-www-form-urlencoded"},success:function(i){t("log","访问成功"," at uitl/QS-baiduyy.js:25"),e(i)},fail:function(e){t("log","访问失败"," at uitl/QS-baiduyy.js:29"),i(e)}})}))}function u(t){var e=!1,i=!1;if("string"!==typeof t&&(t&&!0===t.lineUp&&(e=!0),t&&!0===t.returnAudio&&(i=!0)),i)return new Promise((function(e,n){l(t,i).then((function(t){e(t)})).catch((function(t){n(t)}))}));!s||e?(s=!0,l(t)):o.push(t)}function l(e,i){if(t("log","准备获取语音tok"," at uitl/QS-baiduyy.js:66"),i)return new Promise((function(n,a){c().then((function(o){t("log","获取语音tok接口成功"," at uitl/QS-baiduyy.js:70"),o.data&&o.data.access_token?(t("log","token: "+o.data.access_token," at uitl/QS-baiduyy.js:72"),n(f(e,o.data.access_token,i))):(t("log","获取语音tok接口为空"," at uitl/QS-baiduyy.js:75"),a("获取语音tok接口为空"))})).catch((function(e){t("log","获取语音tok接口失败"," at uitl/QS-baiduyy.js:79"),a(e||"获取语音tok接口失败")}))}));c().then((function(i){t("log","获取语音tok接口成功"," at uitl/QS-baiduyy.js:85"),i.data&&i.data.access_token?(t("log","token: "+i.data.access_token," at uitl/QS-baiduyy.js:87"),f(e,i.data.access_token)):t("log","获取语音tok接口为空"," at uitl/QS-baiduyy.js:90")})).catch((function(e){t("log","获取语音tok接口失败"," at uitl/QS-baiduyy.js:93")}))}function f(t,e,i){"string"==typeof t&&(t={voiceSet:{tex:t}});var a=n({tok:e,cuid:e,ctp:1,lan:"zh"},t.voiceSet);if(i)return _(a,t.audioSet,t.audioCallback,t.lineUp,i);_(a,t.audioSet,t.audioCallback,t.lineUp,i)}function d(t,e){t&&(e.volume=t.volume||1,e.startTime=t.startTime||0,e.loop=t.loop||!1,e.obeyMuteSwitch=!t.obeyMuteSwitch||"boolean"!=typeof t.obeyMuteSwitch||t.obeyMuteSwitch)}function _(e,i,n,a,c){var u=uni.createInnerAudioContext();d(i,u);var f=[];for(var _ in e)f.push(_+"="+encodeURIComponent(encodeURIComponent(e[_])));if(u.src="".concat(r,"?").concat(f.join("&")),c)return u.onEnded((function(){t("log","音频播放结束"," at uitl/QS-baiduyy.js:135"),t("log","销毁音频实例"," at uitl/QS-baiduyy.js:136"),u.destroy(),u=null})),u.onError((function(e){n&&n.onError&&"function"==typeof n.onError&&n.onError(e),t("log","音频播放错误: "+JSON.stringify(e)," at uitl/QS-baiduyy.js:142"),t("log","销毁音频实例"," at uitl/QS-baiduyy.js:143"),u.destroy(),u=null})),u;u.onPlay((function(){t("log","音频播放开始"," at uitl/QS-baiduyy.js:150"),n&&n.onPlay&&"function"==typeof n.onPlay&&n.onPlay()})),u.onPause((function(){n&&n.onPause&&"function"==typeof n.onPause&&n.onPause()})),u.onWaiting((function(){n&&n.onWaiting&&"function"==typeof n.onWaiting&&n.onWaiting()})),u.onStop((function(){n&&n.onStop&&"function"==typeof n.onStop&&n.onStop()})),u.onTimeUpdate((function(){n&&n.onTimeUpdate&&"function"==typeof n.onTimeUpdate&&n.onTimeUpdate()})),u.onSeeking((function(){n&&n.onSeeking&&"function"==typeof n.onSeeking&&n.onSeeking()})),u.onSeeked((function(){n&&n.onSeeked&&"function"==typeof n.onSeeked&&n.onSeeked()})),u.onEnded((function(){t("log","音频播放结束"," at uitl/QS-baiduyy.js:172"),t("log","销毁音频实例"," at uitl/QS-baiduyy.js:173"),u.destroy(),u=null,n&&n.onEnded&&"function"==typeof n.onEnded&&n.onEnded(),!1!==a&&(o.length>0?(t("log","队列中"," at uitl/QS-baiduyy.js:179"),l(o[0]),o.splice(0,1)):(t("log","队列为零"," at uitl/QS-baiduyy.js:183"),s=!1))})),u.onError((function(e){n&&n.onError&&"function"==typeof n.onError&&n.onError(e),t("log","音频播放错误: "+JSON.stringify(e)," at uitl/QS-baiduyy.js:190"),t("log","销毁音频实例"," at uitl/QS-baiduyy.js:191"),u.destroy(),u=null})),u.play()}}).call(this,i("0de9")["default"])},c05e:function(t,e,i){"use strict";i.r(e);var n=i("73ad"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},c710:function(t,e,i){"use strict";i.r(e);var n=i("a3e8"),a=i("d6a9");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},d658:function(t,e,i){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(i("2e9a").default)}))},d666:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={MAP_API_KEY:"WOXBZ-UKCW3-BN73P-YTNWU-HAXVF-GIFAH",WEATHER_API_KEY:"dbcd0bce164347c89de825bf1c1ecc03",H5_Map_Key:"GMMBZ-UEUC6-DVISM-E5CKJ-OMHL6-56FJP",BD_Map_Key:"ub60z8oQBNt4XRuvZSQDn16gK4Lo8pPm"};e.default=n},d6a9:function(t,e,i){"use strict";i.r(e);var n=i("9b7f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e469:function(t,e,i){"use strict";i.r(e);var n=i("f1d9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e8c3:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[i("view",{staticClass:t._$s(1,"sc","toUpdate"),attrs:{_i:1},on:{click:t.handeleUpdate}}),i("view",[i("view",{staticClass:t._$s(3,"sc","animation-view"),attrs:{_i:3}},[i("view",{staticClass:t._$s(4,"sc","location"),attrs:{_i:4},on:{click:t.chooseLocation}},[i("myicon",{staticClass:t._$s(5,"sc","icon"),attrs:{icon:"dingwei",_i:5}}),i("text",{staticClass:t._$s(6,"sc","city"),attrs:{_i:6}},[t._v(t._$s(6,"t0-0",t._s(t.position)))])],1),i("view",{staticClass:t._$s(7,"sc","center-container"),attrs:{_i:7}},[i("view",{staticClass:t._$s(8,"sc","flex-content-left"),attrs:{_i:8}},[t._$s(9,"i",t.todayData.iconTypeBai)?i("view",{staticClass:t._$s(9,"sc","today-weather-view"),attrs:{_i:9}},[i("text"),i("text",[t._v(t._$s(11,"t0-0",t._s(t.todayData.dateTxt)))]),i("view",[i("myicon",{staticClass:t._$s(13,"sc","icon"),attrs:{icon:t.todayData.iconTypeBai,_i:13}}),i("text",[t._v(t._$s(14,"t0-0",t._s(t.todayData.tmp_min))+t._$s(14,"t0-1",t._s(t.todayData.tmp_max)))])],1)]):t._e()]),t._$s(15,"i",t.liveWeather.iconType)?i("view",{staticClass:t._$s(15,"sc","flex-content-center"),attrs:{_i:15}},[i("view",{staticClass:t._$s(16,"sc","temp-out-content"),attrs:{_i:16}},[i("text",{staticClass:t._$s(17,"sc","today-temp"),attrs:{_i:17}},[t._v(t._$s(17,"t0-0",t._s(t.liveWeather.fl)))]),i("text",{staticClass:t._$s(18,"sc","temp-symbol"),attrs:{_i:18}})]),i("myicon",{staticClass:t._$s(19,"sc","icon"),attrs:{icon:t.liveWeather.iconType,_i:19}}),i("text",{staticClass:t._$s(20,"sc","today-temp-bottom"),attrs:{_i:20}},[t._v(t._$s(20,"t0-0",t._s(t.liveWeather.cond_txt)))]),i("view",{staticClass:t._$s(21,"sc","temp-out-content__bottom"),attrs:{_i:21}},[i("view",{staticClass:t._$s(22,"sc","flex-center__left"),attrs:{_i:22}},[i("text",{staticClass:t._$s(23,"sc","home-text "),attrs:{_i:23}},[t._v(t._$s(23,"t0-0",t._s(t.liveWeather.hum)))]),i("text",{staticClass:t._$s(24,"sc","home-text"),attrs:{_i:24}},[t._v(t._$s(24,"t0-0",t._s(t.liveWeather.wind_sc)))])]),i("view",{staticClass:t._$s(25,"sc","flex-center__right"),attrs:{_i:25}},[i("view",{staticClass:t._$s(26,"sc","home-text out-scroll-text"),attrs:{_i:26}},[i("text",{staticClass:t._$s(27,"sc","scroll-text"),attrs:{_i:27}},[t._v(t._$s(27,"t0-0",t._s(t.warmPrompt)))])])])])],1):t._e(),t._$s(28,"i",t.tomorrowData.iconTypeBai)?i("view",{staticClass:t._$s(28,"sc","flex-content-right"),attrs:{_i:28}},[i("view",{staticClass:t._$s(29,"sc","today-weather-view"),attrs:{_i:29}},[i("text"),i("text",[t._v(t._$s(31,"t0-0",t._s(t.tomorrowData.dateTxt)))]),i("view",[i("myicon",{staticClass:t._$s(33,"sc","icon"),attrs:{icon:t.tomorrowData.iconTypeBai,_i:33}}),i("text",[t._v(t._$s(34,"t0-0",t._s(t.tomorrowData.tmp_min))+t._$s(34,"t0-1",t._s(t.tomorrowData.tmp_max)))])],1)])]):t._e()]),i("view",{staticClass:t._$s(35,"sc","all-day-list"),attrs:{_i:35}},[i("scroll-view",{staticClass:t._$s(36,"sc","scroll-view_x"),attrs:{_i:36}},t._l(t._$s(37,"f",{forItems:t.everyHourData}),(function(e,n,a,o){return i("view",{key:t._$s(37,"f",{forIndex:a,key:e.time}),staticClass:t._$s("37-"+o,"sc","all-day-list-item"),attrs:{_i:"37-"+o}},[i("view",{staticClass:t._$s("38-"+o,"sc","day-list-item"),attrs:{_i:"38-"+o}},[t._v(t._$s("38-"+o,"t0-0",t._s(e.time)))]),i("view",{staticClass:t._$s("39-"+o,"sc","day-list-item"),attrs:{_i:"39-"+o}},[i("myicon",{attrs:{icon:e.iconType,_i:"40-"+o}})],1),i("view",{staticClass:t._$s("41-"+o,"sc","day-list-item"),attrs:{_i:"41-"+o}},[t._v(t._$s("41-"+o,"t0-0",t._s(e.tmp)))])])})),0)])]),i("view",{staticClass:t._$s(42,"sc","one-week-list"),attrs:{_i:42}},t._l(t._$s(43,"f",{forItems:t.everyWeekData}),(function(e,n,a,o){return i("view",{key:t._$s(43,"f",{forIndex:a,key:e.weekday}),staticClass:t._$s("43-"+o,"sc","one-week-list-item"),attrs:{_i:"43-"+o}},[i("view",{staticClass:t._$s("44-"+o,"sc","week-list-item"),attrs:{_i:"44-"+o}},[i("view",[t._v(t._$s("45-"+o,"t0-0",t._s(e.weekday)))]),i("view",[t._v(t._$s("46-"+o,"t0-0",t._s(e.date)))])]),i("view",{staticClass:t._$s("47-"+o,"sc","week-list-item"),attrs:{_i:"47-"+o}},[t._v(t._$s("47-"+o,"t0-0",t._s(e.cond_txt_d)))]),i("view",{staticClass:t._$s("48-"+o,"sc","week-list-item"),attrs:{_i:"48-"+o}},[i("myicon",{attrs:{icon:e.iconTypeBai,_i:"49-"+o}})],1),i("view",{staticClass:t._$s("50-"+o,"sc","week-list-item"),attrs:{_i:"50-"+o}},[t._v(t._$s("50-"+o,"t0-0",t._s(e.tmp_min))+t._$s("50-"+o,"t0-1",t._s(e.tmp_max)))]),i("view",{staticClass:t._$s("51-"+o,"sc","week-list-item"),attrs:{_i:"51-"+o}},[i("myicon",{attrs:{icon:e.iconTypeYe,_i:"52-"+o}})],1),i("view",{staticClass:t._$s("53-"+o,"sc","week-list-item"),attrs:{_i:"53-"+o}},[t._v(t._$s("53-"+o,"t0-0",t._s(e.cond_txt_n)))]),i("view",{staticClass:t._$s("54-"+o,"sc","week-list-item"),attrs:{_i:"54-"+o}},[i("view",[t._v(t._$s("55-"+o,"t0-0",t._s("无持续风向"==e.wind_dir?"无":e.wind_dir)))]),i("view",[t._v(t._$s("56-"+o,"t0-0",t._s(e.wind_sc)))])])])})),0),t._$s(57,"i",t.todayData.sr)?i("view",{staticClass:t._$s(57,"sc","live-index-view"),attrs:{_i:57}},[i("view",{staticClass:t._$s(58,"sc","live-index-item"),attrs:{_i:58}},[i("view",{staticClass:t._$s(59,"sc","live-index-item-left"),attrs:{_i:59}},[i("view",{staticClass:t._$s(60,"sc","live-index-top-txt"),attrs:{_i:60}},[i("text")]),i("view",{staticClass:t._$s(62,"sc","live-index-bottom-txt"),attrs:{_i:62}},[i("text",[t._v(t._$s(63,"t0-0",t._s(t.todayData.sr)))])])]),i("view",{staticClass:t._$s(64,"sc","live-index-item-right"),attrs:{_i:64}},[i("view",{staticClass:t._$s(65,"sc","live-index-top-txt"),attrs:{_i:65}},[i("text")]),i("view",{staticClass:t._$s(67,"sc","live-index-bottom-txt"),attrs:{_i:67}},[i("text",[t._v(t._$s(68,"t0-0",t._s(t.todayData.ss)))])])])]),i("view",{staticClass:t._$s(69,"sc","live-index-item"),attrs:{_i:69}},[i("view",{staticClass:t._$s(70,"sc","live-index-item-left"),attrs:{_i:70}},[i("view",{staticClass:t._$s(71,"sc","live-index-top-txt"),attrs:{_i:71}},[i("text")]),i("view",{staticClass:t._$s(73,"sc","live-index-bottom-txt"),attrs:{_i:73}},[i("text",[t._v(t._$s(74,"t0-0",t._s(t.todayData.pop)))])])]),i("view",{staticClass:t._$s(75,"sc","live-index-item-right"),attrs:{_i:75}},[i("view",{staticClass:t._$s(76,"sc","live-index-top-txt"),attrs:{_i:76}},[i("text")]),i("view",{staticClass:t._$s(78,"sc","live-index-bottom-txt"),attrs:{_i:78}},[i("text",[t._v(t._$s(79,"t0-0",t._s(t.todayData.wind_deg)))])])])]),i("view",{staticClass:t._$s(80,"sc","live-index-item"),attrs:{_i:80}},[i("view",{staticClass:t._$s(81,"sc","live-index-item-left"),attrs:{_i:81}},[i("view",{staticClass:t._$s(82,"sc","live-index-top-txt"),attrs:{_i:82}},[i("text")]),i("view",{staticClass:t._$s(84,"sc","live-index-bottom-txt"),attrs:{_i:84}},[i("text",[t._v(t._$s(85,"t0-0",t._s(t.todayData.wind_spd))),i("text")])])]),i("view",{staticClass:t._$s(87,"sc","live-index-item-right"),attrs:{_i:87}},[i("view",{staticClass:t._$s(88,"sc","live-index-top-txt"),attrs:{_i:88}},[i("text")]),i("view",{staticClass:t._$s(90,"sc","live-index-bottom-txt"),attrs:{_i:90}},[i("text",[t._v(t._$s(91,"t0-0",t._s(t.todayData.vis))),i("text")])])])]),i("view",{staticClass:t._$s(93,"sc","live-index-item"),attrs:{_i:93}},[i("view",{staticClass:t._$s(94,"sc","live-index-item-left"),attrs:{_i:94}},[i("view",{staticClass:t._$s(95,"sc","live-index-top-txt"),attrs:{_i:95}},[i("text")]),i("view",{staticClass:t._$s(97,"sc","live-index-bottom-txt"),attrs:{_i:97}},[i("text",[t._v(t._$s(98,"t0-0",t._s(t.todayData.mr)))])])]),i("view",{staticClass:t._$s(99,"sc","live-index-item-right"),attrs:{_i:99}},[i("view",{staticClass:t._$s(100,"sc","live-index-top-txt"),attrs:{_i:100}},[i("text")]),i("view",{staticClass:t._$s(102,"sc","live-index-bottom-txt"),attrs:{_i:102}},[i("text",[t._v(t._$s(103,"t0-0",t._s(t.todayData.ms)))])])])])]):t._e(),t._$s(104,"i",0!=t.lifeStyle.length)?i("view",{staticClass:t._$s(104,"sc","last-view"),attrs:{_i:104}},t._l(t._$s(105,"f",{forItems:t.lifeStyle}),(function(e,n,a,o){return i("view",{key:t._$s(105,"f",{forIndex:a,key:e.type}),staticClass:t._$s("105-"+o,"sc","last-view-item"),attrs:{_i:"105-"+o}},[i("view",{staticClass:t._$s("106-"+o,"sc","last-view-item-top"),attrs:{_i:"106-"+o}},[t._v(t._$s("106-"+o,"t0-0",t._s(t.lifeEnum[e.type])))]),i("view",{staticClass:t._$s("107-"+o,"sc","last-view-item-bottom"),attrs:{_i:"107-"+o}},[t._v(t._$s("107-"+o,"t0-0",t._s(e.brf)))]),i("view",{staticClass:t._$s("108-"+o,"sc","home-text out-scroll-text"),attrs:{_i:"108-"+o}},[i("text",{staticClass:t._$s("109-"+o,"sc","scroll-text"),attrs:{_i:"109-"+o}},[t._v(t._$s("109-"+o,"t0-0",t._s(e.txt)))])])])})),0):t._e()])])},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},f0c5:function(t,e,i){"use strict";function n(t,e,i,n,a,o,s,r,c,u){var l,f="function"===typeof t?t.options:t;if(c){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var _ in c)d.call(c,_)&&!d.call(f.components,_)&&(f.components[_]=c[_])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=i,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):a&&(l=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(f.functional){f._injectStyles=l;var p=f.render;f.render=function(t,e){return l.call(e),p(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:f}}i.d(e,"a",(function(){return n}))},f1d9:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:8")},onHide:function(){t("log","App Hide"," at App.vue:11")}};e.default=i}).call(this,i("0de9")["default"])}},[["79fa","app-config"]]]);
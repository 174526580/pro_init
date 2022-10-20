import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载vant组件库
import Vant from 'vant'
// 加载vant组件库样式
import 'vant/lib/index.css'
// 自动设置rem基准值（html标签字体大小）
import 'amfe-flexible'
// 加载全局样式
import './style/index.less'
import './utils/dayjs'
import dayjs from "dayjs"
// import echarts from 'echarts'
import {
  ding
} from '@/utils/ding'
// import Qrcode from '@vue-qrcode-reader' 
// import md5 from 'js-md5'
Vue.prototype.ding = ding;
Vue.prototype.dayjs = dayjs; //可以全局使用dayjs
Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts
// Vue.prototype.qrcode = Qrcode
// Vue.prototype.md5=md5

// 全局注册vant组件
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
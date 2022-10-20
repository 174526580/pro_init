/**
 * 初始化dayjs相关配置
 */
import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' //配置中文语言包
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.locale('zh-cn') //使用中文语言包
// console.log(dayjs('2020-01-01').from(dayjs()))
//把处理相对时间的代码包装为全局过滤器
//过滤器其实就是一个可以在模板中调用的函数
//在组件的模板中使用过滤器：{{xxx| relativeTime}}
//管道符面前的内容作为参数传递给过滤器函数
//过滤器的返回值会渲染使用过滤器的模板中
Vue.filter('relativeTime', value => {
  return dayjs(value).from(dayjs())
})
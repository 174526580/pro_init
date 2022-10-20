import axios from 'axios'
import store from '@/store/'
import JSONbig from 'json-bigint'
import router from '@/router/'
import {
  Toast
} from 'vant'
const request = axios.create({
  // 基础路径
  // baseURL: 'http://localhost/web/Mobile',
  // baseURL: 'http://192.168.2.68/web/Mobile',
  // baseURL: 'http://101.37.162.154:91/web/Mobile',
  // baseURL: 'https://szsf.pinghu.gov.cn:82/web/Mobile',
  //baseURL: '/web/Mobile',
  transformResponse: [function (data) {
    try {
      return JSONbig.parse(data)
    } catch (error) {
      return data
    }
  }]
})
// const refreshTokenReq = axios.create({
//   // 基础路径
//   baseURL: 'http://192.168.2.150:99/web/Mobile'

// })

//请求拦截器
request.interceptors.request.use(function (config) {
  const {
    user
  } = store.state
  if (user) {
    config.headers.Authorization = `Bearer ${user.access_token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
//响应拦截器
request.interceptors.response.use(function (response) {
  return response
}, async function (error) {
  const status = error.response.status
  if (status === 400) {
    //客户端请求参数错误
    Toast.fail('客户端请求参数异常')
  } else if (status === 401) {
    //token无效
    Toast('token失效,请重新登录')
    redirectLogin() //重新登录
    // console.log(this.$route.query)

  } else if (status === 403) {
    //没有权限操作
    Toast.fail('没有权限操作,请联系管理员')
    // Notify({
    //   type: 'warning',
    //   message: '没有权限操作'
    // })
  } else if (status >= 500) {
    //服务端错误
    Toast.fail('服务端异常')
    // Notify({
    //   type: 'warning',
    //   message: '服务端异常'
    // })
  }
  //Toast.clear()

  return Promise.reject(error)
})

function redirectLogin() {
  router.replace({
    name: 'Login',
    // query: {
    //   redirect: router.currentRoute.fullPath //当前路径
    // }
  })
}
export default request
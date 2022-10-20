import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  Toast
} from 'vant'
import store from '@/store/'
// import {
//   ding
// } from '@/utils/ding'
Vue.use(VueRouter)
const routes = [{
    path: '/login', //登录页
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      page_id: 1,
      page_name: '登录',
      requiresLogin: false
    }
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/notFound.vue'),
    meta: {
      page_id: 2,
      page_name: '404',
      requiresAuth: false
    },
  },
  {
    path: '/index', //首页
    name: 'Home',

    component: () => import('@/views/home/index'),
    meta: {
      page_id: 3,
      page_name: '首页',
      requiresLogin: true,
      requiresAuth: false
    },
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // if (to.meta.page_name) {
  //   document.title = to.meta.page_name
  // }
  if (to.meta.requiresLogin) {
    //校验登录状态，提示用户
    if (store.state.user) {
      if (to.meta.requiresAuth) {
        const menus = store.state.menus
        let flag = 0
        if (menus && menus.length > 0) {
          menus.forEach((item) => {
            if (item.action == to.meta.action & item.controller == to.meta.controller) {
              flag = 1
              return false
            }
          })
        }
        if (flag === 0) {
          Toast.fail('权限不足无法操作')
          return false
        }
      }
      // console.log(`https://szsf.pinghu.gov.cn:82/mobile/#${to.path}`)
      // ding(store.state.user, to)
    } else {
      router.replace({
        name: 'Login',
        query: router.currentRoute.fullPath
      })
    }
  }
  next()
})
// router.afterEach(route => {
//   console.log(route)
// })
export default router
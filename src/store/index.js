import Vue from 'vue'
import Vuex from 'vuex'
import {
  setItem,
  getItem
} from "@/utils/storage";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('phsfj-user'), //当前登录用户的登录状态
    cachePages: [], //keep-alive条件缓存
    menus: getItem('phsfj-menus')
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      setItem('phsfj-user', state.user)
    },
    setMenus(state, data) {
      state.menus = data
      setItem('phsfj-menus', state.menus)
    },
    addCachePages(state, pageName) {
      if (!state.cachePages.includes(pageName)) {
        state.cachePages.push(pageName)
      }
    },
    clearCachePages(state) {
      state.cachePages = []
    },
    removeCachePages(state, pageName) {
      const index = state.cachePages.indexOf(pageName)
      if (index !== -1) {
        state.cachePages.splice(index, 1)
      }
    }
  },
  actions: {},
  modules: {}
})
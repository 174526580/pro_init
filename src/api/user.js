/**
 * 用户相关请求模块
 */
import request from '@/utils/request'
const HOST = '/web/Rest/'
/**
 * 登录
 */
export const login = data => {
  return request({
    method: 'POST',
    url: `${HOST}/user/userlogin`,
    data
  })
}
export const dingLogin = data => {
  return request({
    method: 'POST',
    url: `${HOST}/user/dinglogin`,
    data
  })
}
/**
 * 首页相关请求模块
 */
import request from '@/utils/request'
const HOST = '/web/Rest/'

/**
 * 通知公告
 */
export const getWeatherinfo = () => {
  return request({
    method: 'POST',
    url:`${HOST}/home/getweather`,
  })
}

export const ding = (user, page_id, page_name, page_url) => {
    // //基础埋点
    // // 单页应用 或 “单个页面”需异步补充PV日志参数还需进行如下埋点：
    // aplus_queue.push({
    //     action: 'aplus.setMetaInfo',
    //     arguments: ['aplus-waiting', 'MAN']
    // }); //
    // // 单页应用路由切换后 或 在异步获取到pv日志所需的参数后再执行sendPV：
    // aplus_queue.push({
    //     'action': 'aplus.sendPV',
    //     'arguments': [{
    //         is_auto: false
    //     }, {
    //         // 当前你的应用信息，此两行请勿修改
    //         sapp_id: '20478',
    //         sapp_name: 'pinghushuzisifa',
    //         // 自定义PV参数key-value键值对（只能是这种平铺的json，不能做多层嵌套），如：
    //         page_id: page_id,
    //         page_name: page_name,
    //         page_url: page_url
    //     }]
    // })
    // //用户信息埋点
    // // 如采集用户信息是异步行为需要先执行这个BLOCK埋点
    // aplus_queue.push({
    //     action: 'aplus.setMetaInfo',
    //     arguments: ['_hold', 'BLOCK']
    // });
    // // 设置会员昵称
    // aplus_queue.push({
    //     action: "aplus.setMetaInfo",
    //     arguments: ["_user_nick", user.account]
    // });
    // // 设置会员ID
    // aplus_queue.push({
    //     action: "aplus.setMetaInfo",
    //     arguments: ["_user_id", user.accountId]
    // });
    // // aplus_queue.push({
    // //     action: "aplus.setMetaInfo",
    // //     arguments: ["_dev_id", "yourDeviceId"]
    // // });
    // // 如采集用户信息是异步行为，需要先设置完用户信息后再执行这个START埋点
    // // 此时被block住的日志会携带上用户信息逐条发出
    // aplus_queue.push({
    //     action: 'aplus.setMetaInfo',
    //     arguments: ['_hold', 'START']
    // });
}
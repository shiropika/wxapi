/* eslint-disable */
const WXAPI = require('./components/index')
WXAPI.init('mpstore')

App({
  onLaunch: function () {
    // 调用简单例子
   /*  WXAPI.queryMobileLocation({
      mobile: '13500000000'
    }).then(res => {
      console.log('queryMobileLocation:', res)
    }).catch(e => {
      console.error('接口调用异常:', e)
    })
    // 读取 banner
    WXAPI.banners().then(res => {
      console.log('banners:', res)
    })  */

    WXAPI.queryConfigBatch('mallName,WITHDRAW_MIN,ALLOW_SELF_COLLECTION,order_hx_uids,subscribe_ids,share_profile').then(res => {
      if (res.code == 0) {
        res.data.forEach(config => {
          wx.setStorageSync(config.key, config.value);
        })
        if (this.configLoadOK) {
          this.configLoadOK()
        }
      }
    })
  },
  globalData: {
    
  }
})

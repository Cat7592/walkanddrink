// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 初始化云托管
    if (wx.cloud) {
      wx.cloud.init({
        env: 'express-ci3d', // 填入云托管环境ID
        traceUser: true
      })
    }
  },
  globalData: {
    userInfo: null,
    // 云托管服务配置
    cloudRun: {
      baseUrl: 'https://express-ci3d-251148-9-1426098238.sh.run.tcloudbase.com' // 填入云托管服务的公网域名
    }
  }
})

import Taro from '@tarojs/taro'

class Pages {
  /**
   * 页面枚举
   */
  getRouters() {
    return {
      404: 'pages/default/404',
      home: 'pages/index/index',    // 首页
    }
  }

  // 获取当前路由
  getCurRouter() {
    if (process.env.TARO_ENV === 'weapp') {
      const curPages = Taro.getCurrentPages()
      return curPages[curPages.length - 1].route
    } else {
      const location = window.location
      return location.pathname.slice(1)
    }
  }

  backToHome() {
    Taro.switchTab({
      url: '/index/index',
    })
  }
}

export default new Pages()
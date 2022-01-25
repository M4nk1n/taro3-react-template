export default defineAppConfig({
  pages: ["pages/index/index", 'pages/user/index'],
  subpackages: [
    {
      root: 'pages/default',
      pages: ['404'],
    }
  ],
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './_resources/assets/tabbar/home.png',
        selectedIconPath: './_resources/assets/tabbar/home_selected.png'
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: './_resources/assets/tabbar/user.png',
        selectedIconPath: './_resources/assets/tabbar/user_selected.png'
      },
    ],
  },
  window: {
    navigationStyle: 'custom'
  },
  // 页面切换动画
  animation: {
    duration: 200, // 动画切换时间，单位毫秒
    delay: 50, // 切换延迟时间，单位毫秒
  }
})

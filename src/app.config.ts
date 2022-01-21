export default {
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
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
}

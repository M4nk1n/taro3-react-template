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
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
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

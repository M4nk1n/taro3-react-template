export default {
  pages: ["pages/index/index", 'pages/user/index'],
  subpackages: [
    {
      root: 'pages/default',
      pages: ['404'],
    }
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
}

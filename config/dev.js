module.exports = {
  env: { NODE_ENV: '"development"' },
  defineConstants: {
    TARO_API_BASE: {
      API_BASE_DEV: JSON.stringify('https://aiot-saas.t.supor.com'),
      API_BASE_TEST: JSON.stringify('https://siot-saas.t.supor.com'),
      API_BASE_PROD: JSON.stringify('https://i.supor.com')
    }
  },
  mini: {},
  h5: {
    devServer: {
      port: '9001',
      open: false
    }
  },
}

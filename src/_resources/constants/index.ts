/**
 * 导出常量
 */
const Constants = {
  // token字段
  MASK_TOKEN: 'maskToken',
  // 最后一次登录失效的时间戳
  LOGIN_FAILURE_TIMESTAMP: 'loginFailureTimeStamp',
  // 拦截器自定义头部key
  INTERCEPTOR_HEADER: 'interceptor-custom-header',
}

/**
 * 网络链接
 */
export const HOSTS = {
  // 接口请求 base
  DEV: 'API_BASE_DEV',
  TEST: 'API_BASE_TEST',
  PROD: 'API_BASE_PROD'
}

export default Constants
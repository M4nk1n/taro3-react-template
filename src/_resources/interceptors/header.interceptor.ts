/**
 * 头部拦截器 处理请求头的配置
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (chain: any) => {
  const requestParams = chain.requestParams
  const { header } = requestParams

  requestParams.header = header

  return chain.proceed(requestParams)
}
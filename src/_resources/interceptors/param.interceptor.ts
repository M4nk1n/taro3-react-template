/**
 * 参数拦截器 必传参数验证等
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (chain: any) => {
  const requestParams = chain.requestParams
  const { data } = requestParams

  // 这里做接口入参相关的处理
  requestParams.data = data

  return chain.proceed(requestParams)
}
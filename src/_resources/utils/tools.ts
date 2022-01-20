/**
 * 转换 JSON 格式字符串为 url 拼接字符串
 * @param param JSON 形式的参数字符串
 */
const transParams = (param: string): string => {
  console.log('enter transparam', param)
  const paramObj = JSON.parse(param)
  let paramStr = ''
  for (const key in paramObj) {
    if (paramObj.hasOwnProperty(key)) {
      const element = paramObj[key]
      paramStr = "" + paramStr + (paramStr.length > 0 ? '&' : '?') + key + "=" + element
    }
  }
  console.log('transParams转换后的参数', paramStr)
  return paramStr
}

export {
  transParams
}

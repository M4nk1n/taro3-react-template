declare module "*.png"
declare module "*.gif"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"
declare module "*.css"
declare module "*.less"
declare module "*.scss"
declare module "*.sass"
declare module "*.styl"

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
    BUILD_ENV: 'dev' | 'prod'
    [key: string]: any
  }
}

/**
 * 接口baseurl
 */
declare const TARO_API_BASE: string

declare const wx: {
  [key: string]: any
}
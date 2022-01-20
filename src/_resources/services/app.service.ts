import BaseRequest from '@/utils/request'
import { HOSTS } from '@/constants/index'

/**
 * App相关服务
 */
class AppService extends BaseRequest {
  constructor() {
    super({
      hostKey: HOSTS.TARO_API_BASE,
    })
  }

  /**
   * 根据版本查询是否需要升级
   */
  queryAppUpdate(payload: {
    version: string
  }) {
    return this.post({
      url: '/app/queryUpdate',
      data: payload,
    })
  }
}

export default new AppService()
import Taro from '@tarojs/taro'
import { isWeb } from '@/utils/tools'

interface UseNavigationBarInfoPresets {
  menuButtonInfo: Taro.getMenuButtonBoundingClientRect.Rect
  systemInfo: Taro.getSystemInfoSync.Result
}

interface INavigationBarInfo {
  navigationBarHeight: number
  navigationContentHeight: number
  menuButtonHeight: number
  navigationPaddding: number
  menuButtonWidth: number
  statusBarHeight: number
}

/**
 * 获取导航栏相关信息
 */
export const useNavigationBarInfo = (
  presets: UseNavigationBarInfoPresets = {} as any
): INavigationBarInfo => {
  const systemInfo = presets.systemInfo || Taro.getSystemInfoSync()
  const menuButtonInfo =
    presets.menuButtonInfo || (
      !isWeb() && Taro.canIUse('getMenuButtonBoundingClientRect') ?
        Taro.getMenuButtonBoundingClientRect()
        : {
          top: 0,
          height: 40,
          width: 160
        }
    )
  const { statusBarHeight } = systemInfo
  let navigationContentHeight = 40
  navigationContentHeight =
    (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
    menuButtonInfo.height
  return {
    navigationBarHeight: statusBarHeight + navigationContentHeight,
    navigationContentHeight,
    menuButtonHeight: menuButtonInfo.height - 10,
    navigationPaddding: menuButtonInfo.right === undefined ? 4 : (systemInfo.windowWidth - menuButtonInfo.right),
    statusBarHeight: systemInfo.statusBarHeight,
    menuButtonWidth: menuButtonInfo.width,
  }
}

import React from 'react'
import { View, Image } from '@tarojs/components'
import { useNavigationBarInfo } from '@/utils/hooks'
import Router from '@/utils/router'

import icon_back from '@/assets/back.svg'
import icon_home from '@/assets/home.svg'

import './index.scss'

type NavigationBarProps = {
  title?: string
}

const NavigationBar = (props: NavigationBarProps): JSX.Element => {
  const { title } = props

  const {
    statusBarHeight,
    navigationBarHeight,
    navigationContentHeight,
    menuButtonHeight,
    navigationPaddding,
    menuButtonWidth,
  } = useNavigationBarInfo()

  const handleBack = () => {
    Router.navigateBack()
  }

  const handleBackToHome = () => {
    Router.backToHome()
  }

  return (
    <View
      className='nav-header'
      style={{
        height: navigationBarHeight,
        padding: `0 ${navigationPaddding}px`,
      }}
    >
      <View
        className='nav-header-status-placeholder'
        style={{ height: statusBarHeight }}
      />
      <View
        className='nav-header-content'
        style={{ height: `${navigationContentHeight}px` }}
      >
        <View
          className='nav-header-content-left'
          style={{ width: menuButtonWidth }}
        >
          <View
            className='nav-header-content-left-icon-group'
            style={{
              height: `${menuButtonHeight}px`,
              borderRadius: `${menuButtonHeight / 2}px`,
            }}
          >
            <Image
              src={icon_back}
              className='nav-header-content-left-icon'
              onClick={handleBack}
            />
            <View className='nav-header-content-left-icon-divider' />
            <Image
              src={icon_home}
              className='nav-header-content-left-icon'
              onClick={handleBackToHome}
            />
          </View>
        </View>
        <View className='nav-header-content-center'>{title || ''}</View>
        <View
          className='nav-header-content-right'
          style={{ width: menuButtonWidth }}
        />
      </View>
    </View>
  )
}

export default NavigationBar
import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Router from '@/utils/router'
import './index.scss'

interface TabbarItem {
  pagePath: string
  text: string
}

export const list: TabbarItem[] = [
  {
    pagePath: 'pages/index/index',
    text: '首页',
  },
  {
    pagePath: 'pages/user/index',
    text: '我的',
  },
]

const CustomTabBar = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState('')

  const handleSwtich = (item: any) => {
    Taro.switchTab({
      url: `/${item.pagePath}`,
    })
  }

  useEffect(() => {
    // 默认选中当前页面
    const currentRoute = Router.getCurrentRoute()
    if (currentRoute) {
      setCurrentTab(currentRoute)
    }

    // 监听变化
    wx.onAppRoute((res: { path: string }) => {
      if (res.path) {
        setCurrentTab(res.path)
      }
    })
  }, [])

  return (
    <View className='tabbar-container'>
      {list.map(item => {
        return (
          <View
            onClick={() => handleSwtich(item)}
            key={item.pagePath}
            className={`tabbar-item ${item.pagePath === currentTab ? 'tabbar-item-selected' : ''
              }`}
          >
            <View className='tabbar-item-text'>{item.text}</View>
          </View>
        )
      })}
    </View>
  )
}

export default CustomTabBar
/**
 * 404页面
 */
import React from 'react'
import { View } from '@tarojs/components'
import NavigationBar from '@/components/navbar'

import './404.scss'

const NotFound = (): JSX.Element => {
  return (
    <View className='page'>
      <NavigationBar title='404 Not Found' />
      <View>404页面</View>
    </View>
  )
}

export default NotFound
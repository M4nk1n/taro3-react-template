/**
 * 个人中心页面
 */
import React from 'react'
import { useObserver } from 'mobx-react'
import { View, Text } from '@tarojs/components'
import NavigationBar from '@/components/navbar'

import store from '@/store'

import './index.scss'

const UserIndex = (): JSX.Element => {
  return useObserver(() =>
    <View className='page'>
      <NavigationBar title='个人中心' />

      <View className='wrapper'>
        <Text>个人中心页</Text>
        <Text>{'Counter: ' + store.app.counter}</Text>
        <Text>{'Other: ' + store.app.other}</Text>
      </View>
    </View>
  )
}

export default UserIndex
/**
 * 个人中心页面
 */
import React from 'react'
import { useObserver } from 'mobx-react'
import { View, Text } from '@tarojs/components'
import store from '@/store'

import './index.scss'

const UserIndex = (): JSX.Element => {
  return useObserver(() =>
    <View className='user-index-page'>
      <Text>个人中心页</Text>
      <Text>{'Counter: ' + store.app.counter}</Text>
    </View>
  )
}

export default UserIndex
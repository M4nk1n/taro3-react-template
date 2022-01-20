import React, { useCallback } from 'react'
import { useLocalStore, useObserver } from 'mobx-react'
import { View, Text, Button, Image } from "@tarojs/components"
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks"
import store from '@/store'

import logo from "@/assets/hook.png"

import './index.scss'

const Index = (): JSX.Element => {
  const env = useEnv()
  const [, { setTitle }] = useNavigationBar({ title: "Taro Hooks" })
  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true,
  })
  const [showToast] = useToast({ mask: true })

  const handleModal = useCallback(() => {
    show({ content: "不如给一个star⭐️!" }).then(() => {
      showToast({ title: "点击了支持!" })
    })
  }, [show, showToast])

  const localStore = useLocalStore(() => store.app)

  return useObserver(() =>
    <View className='wrapper'>
      <Image className='logo' src={logo} />
      <View className='list'>
        <Text className='label'>运行环境</Text>
        <Text className='note'>{env}</Text>
      </View>
      <View className='list'>
        <Text className='label'>Coune:</Text>
        <Text className='note'>{localStore.counter}</Text>
      </View>
      <View className='list'>
        <Button className='button' onClick={() => localStore.increment()}>
          Increment
        </Button>
        <Button className='button' onClick={() => localStore.incrementAsync()}>
          IncrementAsync
        </Button>
      </View>
      <Button className='button' onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  )
}

export default Index

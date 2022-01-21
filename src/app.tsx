import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import store from '@/store'
import Router from '@/utils/router'
import Page from '@/utils/page'

import './app.scss'

class App extends Component {
  // 页面404处理
  onPageNotFound(object: unknown): void {
    console.log('on page not found', object)
    Router.redirectTo({
      url: Page.getRouters().notFound,
    })
  }

  // this.props.children 就是要渲染的页面
  render(): JSX.Element {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
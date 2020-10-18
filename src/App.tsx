import React, { Suspense } from 'react'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import configureStore from 'src/store/index'
import Router from 'src/router'

import './App.scss'

const store = configureStore()

const FallbackLoading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}
  ></div>
)

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <Suspense fallback={<FallbackLoading />}>
          <Router />
        </Suspense>
      </Provider>
    </ConfigProvider>
  )
}

export default App

import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import stores from '@src/redux/stores'
import App from './App.jsx'
import 'antd/dist/antd.css'

const ONE = () => {
  return (
    <Provider store={stores}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Provider>
  )
}

ReactDOM.render(<ONE />, document.getElementById('root'))
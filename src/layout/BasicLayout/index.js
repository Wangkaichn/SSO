import React from 'react'
import { Layout } from 'antd'
import Routes from '../router/Routes'
import routerConfig from './routerConfig'

export default () => {
  return (
    <Layout>
      <Layout.Header>
        12
      </Layout.Header>
      <Layout.Content>
        <Routes routerData={routerConfig} />
      </Layout.Content>
    </Layout>
  )
}

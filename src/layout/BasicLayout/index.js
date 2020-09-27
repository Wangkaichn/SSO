import React from 'react'
import { Layout } from 'antd'
import Routes from '@src/router/Routers'
import Header from './BasicComponents/Header'
import AvatarShowUserInfo from './BasicComponents/AvatarShowUserInfo'
import routerConfig from './routerConfig'
import styles from './index.module.scss'

const { Header: AntdHeader, Content } = Layout
export default () => {
  return (
    <Layout className={styles.layout}>
      <AntdHeader className={styles.header}>
        <Header />
      </AntdHeader>
      <Content>
        <Routes routerData={routerConfig} />
        <AvatarShowUserInfo />
      </Content>
    </Layout>
  )
}

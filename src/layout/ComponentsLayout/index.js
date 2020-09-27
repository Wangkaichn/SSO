import React from 'react'
import Routes from '@src/router/Routers'
import routerConfig from './routerConfig'
// import styles from './index.module.scss'

export default () => {
  return (
    <Routes routerData={routerConfig} />
  )
}

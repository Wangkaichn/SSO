import React from 'react'
import { Avatar } from 'antd'
import styles from './index.module.scss'


interface Props {
  /** 
   * 是否在头像旁边展示名称 
  **/
  headUrl: string, // 头像 url
  name: string, // 用户名称, headUrl 无效时, 使用 name
  isShowName?: boolean,
}
const MyAvatar = ({
  headUrl = '',
  name = '',
  isShowName = true,
  ...props
}: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <Avatar size={36} src={headUrl} className={styles.avatar} {...props}>{name.slice(-1)}</Avatar>
      {isShowName && <span className={styles.name}>{name}</span>}
    </div>
  )
}

export default MyAvatar
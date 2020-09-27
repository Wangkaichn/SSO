import React from 'react'
import { Avatar } from 'antd'
import classNames from 'classnames'
import styles from './index.module.scss'


interface Props {
  /**
   * 头像图片地址
   */
  headUrl: string,
  /**
   * 用户名字
   */
  name: string,
  /**
   * 是否在头像右侧展示用户名字
   */
  isShowName?: boolean,
  /**
   * class
   */
  className?: string,
}
const MyAvatar = ({
  headUrl = '',
  name = '',
  isShowName = true,
  className: classNameFromProps,
  ...props
}: Props, ref: any): JSX.Element => {
  const className = classNames({
    [styles.container]: true,
    [classNameFromProps as string]: !!classNameFromProps
  })
  return (
    <div ref={ref} className={className}>
      <Avatar size={36} src={headUrl} className={styles.avatar} {...props}>{name.slice(-1)}</Avatar>
      {isShowName && <span className={styles.name}>{name}</span>}
    </div>
  )
}

export default React.forwardRef(MyAvatar)
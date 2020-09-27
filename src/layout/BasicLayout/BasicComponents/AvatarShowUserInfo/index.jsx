import React, { useState, useEffect, useRef } from 'react'
import { Popover } from 'antd'
import { connect } from 'react-redux'
import useMove from '@src/hooks/useMove'
import useHover from '@src/hooks/useHover'
import Sort, { SortType } from '@src/utils/sort'
import Avatar from '@src/components/Avatar'
import styles from './index.module.scss'


const AvatarShowUserInfo = () => {
  const ref = useRef()
  useMove(ref)
  const callback = () => console.info('useHover - useHover')
  useHover(ref, callback)

  return (
    <>
      <Popover placement="right" title={'text'} content={'content'} trigger="hover">
        <Avatar
          ref={ref}
          headUrl='https://pic4.zhimg.com/8ab19e005614562e20b2142dd9bf4768_xs.jpg'
          isShowName={false}
          className={styles.avatar}
        />
      </Popover>
    </>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(AvatarShowUserInfo)
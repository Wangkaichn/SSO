import React from 'react'
import { connect } from 'react-redux'
import Avatar from '@src/components/Avatar'
import styles from './index.module.scss'

const Header = () => {
  const { headUrl, name } = window.currentUser
  return (
    <div className={styles.container}>
      <Avatar name={name} headUrl={headUrl} isShowName />
    </div>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(Header)

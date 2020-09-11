import React from 'react'
import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'

const NotFound = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className={styles.container}>
      <Result
        className={styles.result}
        status="404"
        title="404: Not Found"
        extra={<Button type="primary" onClick={handleClick}>回到主页</Button>}
      />
    </div>
  )
}

export default NotFound
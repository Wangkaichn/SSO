import React from 'react'
import { Form, Input, Button, message } from 'antd'
import http from '@src/utils/axios'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'

const Login = () => {
  const history = useHistory()
  const handleFinish = async (formValue) => {
    await http.post('/login', formValue)
    message.success('登录成功')
    window.location = '/'
  }
  const handleToRegister = () => {
    history.push('./register')
  }
  return (
    <div className={styles.container}>
      <Form className={styles.form} name="basic" initialValues={{ remember: true }} onFinish={handleFinish}>
        <Form.Item label="昵称" name="nick_name" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item className={styles.submitButton}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          <Button type="ghost" onClick={handleToRegister}>
            去注册
          </Button>
      </Form.Item>
      </Form>
    </div>
  )
}
export default Login
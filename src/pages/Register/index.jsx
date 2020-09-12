import React from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'

const Login = () => {
  const history = useHistory()
  const [form] = Form.useForm()
  const handleFinish = async (formValue) => {
    console.info('formValue: ', formValue) 
  }
  const handleToLogin = () => {
    history.push('./login')
  }
  return (
    <div className={styles.container}>
      <Form className={styles.form} form={form} name="basic" initialValues={{ remember: true }} onFinish={handleFinish}>
        <Form.Item label="昵称" name="name" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="邮箱" name="email" rules={[{ required: true }, { type: 'email', message: '这不是一个有效的邮箱地址' }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item className={styles.submitButton}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
          <Button onClick={handleToLogin}>
            去登录
          </Button>
      </Form.Item>
      </Form>
    </div>
  )
}

export default Login
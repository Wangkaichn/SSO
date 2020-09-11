import React from 'react'
import { Form, Input, Button } from 'antd'
import styles from './index.module.scss'

const Login = () => {
  const handleFinish = async () => {

  }
  return (
    <div className={styles.container}>
      <Form className={styles.form} name="basic" initialValues={{ remember: true }} onFinish={handleFinish}>
        <Form.Item label="昵称" name="name" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item className={styles.submitButton}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
      </Form.Item>
      </Form>
    </div>
  )
}

export default Login
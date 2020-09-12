import React from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import UploadAvatr from '@src/components/Upload/UploadAvatar'
import { debounce } from '@src/utils/throttle'
import styles from './index.module.scss'

const Login = () => {
  const history = useHistory()
  const [form] = Form.useForm()
  const handleFinish = async (formValue) => {
    console.info('formValue: ', formValue, form.validateFields()) 
  }
  const throttleHandleFieldChange = async (solo, all) => {
    // 检测昵称是否已存在
    console.info('solo, all: ', solo, all)
  }
  const handleFieldChange = function (...arg) {
    return debounce(throttleHandleFieldChange, 1000, ...arg)
  }
  const handleToLogin = () => {
    history.push('./login')
  }
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <Form
        className={styles.form}
        form={form}
        name="basic"
        labelAlign="right"
        labelCol={{ span: 6 }}
        onFinish={handleFinish}
        onValuesChange={handleFieldChange}
      >
        <Form.Item hasFeedback label="头像" name="avatar" rules={[{ required: true }]}>
          <UploadAvatr className={styles.uploadAvatr} />
        </Form.Item>
        <Form.Item hasFeedback label="昵称" name="name" rules={[{ required: true }]}>
          <Input allowClear />
=======
      <Form className={styles.form} form={form} name="basic" initialValues={{ remember: true }} onFinish={handleFinish}>
        <Form.Item label="昵称" name="name" rules={[{ required: true }]}>
          <Input placeholder="请输入昵称" />
>>>>>>> 31eeca1d0dea129e72c95674188092ea9c1a2bb9
        </Form.Item>
        <Form.Item hasFeedback label="邮箱" name="email" rules={[{ required: true }, { type: 'email', message: '这不是一个有效的邮箱地址' }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item hasFeedback label="手机号" name="phone" rules={[{ required: true }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item hasFeedback label="密码" name="password" rules={[{ required: true }]}>
          <Input.Password allowClear />
        </Form.Item>
        <Form.Item className={styles.submitButton}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
          <Button type="ghost" onClick={handleToLogin}>
            去登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login

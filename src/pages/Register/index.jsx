import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import http from '@src/utils/axios'
import UploadAvatr from '@src/components/Upload/UploadAvatar'
import styles from './index.module.scss'

const Login = () => {
  const history = useHistory()
  const [nickNameStatus, setNickNameStatus] = useState('')
  const [nickNameError, setNickNameError] = useState('')
  const handleFinish = async (formValue) => {
    await http.post('/registerUser', formValue)
  }
  const handleFieldChange = async ({ nickname }) => {
    if (!nickname) {
      return
    }
    const { data: { isExisted } } = await http.get(`/query/checkNickNameIsExisted?nickname=${nickname}`)
    setNickNameStatus(isExisted ? 'error' : 'success')
    setNickNameError(isExisted ? '当前昵称已经存在' : '')
  }
  const handleToLogin = () => {
    history.push('./login')
  }
  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        name="basic"
        labelAlign="right"
        labelCol={{ span: 6 }}
        onFinish={handleFinish}
        onValuesChange={handleFieldChange}
      >
        <Form.Item hasFeedback label="头像" name="avatar" rules={[{ required: true }]}>
          <UploadAvatr className={styles.uploadAvatr} />
        </Form.Item>
        <Form.Item hasFeedback className={styles.nickName} label="昵称" name="nickname" rules={[{ required: true }]} validateStatus={nickNameStatus} help={nickNameError}>
          <Input allowClear />
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

import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import http from '@src/utils/axios'
import UploadAvatr from '@src/components/Upload/UploadAvatar'
import styles from './index.module.scss'

const Login = () => {
  const history = useHistory()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [nickNameStatus, setNickNameStatus] = useState('')
  const [nickNameError, setNickNameError] = useState('')
  const handleFinish = async (formValue) => {
    setSubmitLoading(true)
    await http.post('/query/registerUser', formValue)
    setSubmitLoading(false)
    handleToLogin()
  }
  const handleFieldChange = async (solo) => {
    const nickName = solo['nick_name']
    if (!nickName) {
      return
    }
    const { data: { isExisted } } = await http.get(`/query/checkNickNameIsExisted?nickname=${nickName}`)
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
        <Form.Item hasFeedback label="头像" name="icon" rules={[{ required: true }]}>
          <UploadAvatr className={styles.uploadAvatr} />
        </Form.Item>
        <Form.Item hasFeedback className={styles.nickName} label="昵称" name="nick_name" rules={[{ required: true }]} validateStatus={nickNameStatus} help={nickNameError}>
          <Input allowClear />
        </Form.Item>
        <Form.Item hasFeedback label="邮箱" name="email" rules={[{ required: true }, { type: 'email', message: '这不是一个有效的邮箱地址' }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item hasFeedback label="手机号" name="mobile" rules={[{ required: true }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item hasFeedback label="密码" name="password" rules={[{ required: true }]}>
          <Input.Password allowClear />
        </Form.Item>
        <Form.Item className={styles.submitButton}>
          <Button type="primary" loading={submitLoading} htmlType="submit">
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

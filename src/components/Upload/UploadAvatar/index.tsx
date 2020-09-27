import React, { useState } from 'react'
import { Upload, Button, message } from 'antd'
import origin from '../../../envconfig.js'

interface Props {
  className?: string,
  onChange: any
}
const UploadAvatar = ({
  className = '',
  onChange
}: Props): JSX.Element => {
  const [imageUrl, setImageUrl] = useState('')
  const handleBeforeUpload = ({ type }: any) => {
    const isImageType = type.includes('image')
    if (!isImageType) {
      message.warn('只能上传图片')
    }
    return isImageType
  }
  const handleChange = ({ file: { response } }: any) => {
    if (!response) {
      return
    }
    const { url } = response
    setImageUrl(origin + url)
    onChange(url)
  }
  return (
    <Upload
        name="avatar"
        className={className}
        listType="picture-card"
        showUploadList={false}
        action={`${origin}/upload/userAvatar`}
        beforeUpload={handleBeforeUpload}
        onChange={handleChange}
      >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : <Button />}
    </Upload>
  )
}

export default UploadAvatar
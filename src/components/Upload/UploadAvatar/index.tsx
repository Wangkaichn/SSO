import React, { useState } from 'react'
import { Upload, Button } from 'antd'

interface Props {
  className?: string,
  onChange: any
}
const UploadAvatar = ({
  className = '',
  onChange
}: Props): JSX.Element => {
  const [imageUrl, setImageUrl] = useState('')
  const handleBeforeUpload = () => false
  const handleChange = () => {
    setImageUrl('https://pic4.zhimg.com/8ab19e005614562e20b2142dd9bf4768_xs.jpg')
    onChange('https://pic4.zhimg.com/8ab19e005614562e20b2142dd9bf4768_xs.jpg')
  }
  return (
    <Upload
        name="avatar"
        className={className}
        listType="picture-card"
        showUploadList={false}
        action=""
        beforeUpload={handleBeforeUpload}
        onChange={handleChange}
      >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : <Button />}
    </Upload>
  )
}

export default UploadAvatar
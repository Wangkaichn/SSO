import React, { useState } from 'react'
import { Upload, message, Button } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import moment from 'moment'
import http from '@src/utils/axios'
import FileList from './FileList'
import SendBlobs from '@src/utils/sendBlobs'
import origin from '@src/envconfig'
import styles from './index.module.scss'

const { Dragger } = Upload

// 1. 自定义上传
// 2. 自定义文件列表
// 3. 续传
const UploadBigFile = () => {
  const [fileList, setFileList] = useState([])
  const [loading, setLoading] = useState(false)

  const handleBeforeUpload = (file) => {
    file.uploadTime = moment.now()
    setFileList(f => [...f, file])
    return false
  }
  const handleUpload = async () => {
    setLoading(true)
    const { name } = fileList[0]
    const options = {
      headers: { 'content-type': 'application/octet-stream' }
    }
    await SendBlobs('/upload/bigFile', name, fileList, options)
    setLoading(false)
    setFileList([])
    message.success('上传成功, 清空列表')
  }
  return (
    <div className={styles.container}>
      <Dragger
        name='file'
        multiple
        showUploadList={false}
        className={styles.dragger}
        action={origin + '/upload/bigFile'}
        beforeUpload={handleBeforeUpload}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">上传文件</p>
        <p className="ant-upload-hint">
          上传超大文件: 文件分块传输
        </p>
      </Dragger>
      {!!fileList.length && <Button
        block
        type="primary"
        loading={loading}
        className={styles.uploadButton}
        onClick={handleUpload}
      >
        上传
      </Button>}
      <FileList className={styles.fileList} dataSource={fileList} />
    </div>
  )
}

export default UploadBigFile
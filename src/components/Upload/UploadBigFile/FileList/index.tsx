import React from 'react'
import { List } from 'antd'
import className from 'classnames'
import styles from './index.module.scss'

type DataSourceType = {
  [key: string]: string
}
interface Props {
  className?: string,
  dataSource: Array<DataSourceType>
}
const FileList = ({ dataSource = [], className: classNameFromProps }: Props) => {
  const divClassName = className({
    [styles.filelist]: false,
    [classNameFromProps as string]: !!classNameFromProps
  })
  return (
    <div className={divClassName}>
      {!!dataSource.length && <List
        size="small"
        bordered
        dataSource={dataSource}
        renderItem={item => <List.Item>{item.name}</List.Item>}
      />}
    </div>
  )
}

export default FileList
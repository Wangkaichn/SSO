// 为 axios 添加错误捕获
import { message } from './node_modules/antd'
import axios from './node_modules/axios'
import orgin from '../../envconfig'

const instance = axios.create({
  baseURL: orgin,
  withCredentials: true,
  headers: {
    // Authorization: `bearer ${Oauth.getStoreToken()}`
  }
})

const successCallback = (response) => {
  const { data, status, statusText } = response
  message.success(`status: ${status}`)
  return { data, status, statusText }
}
const failedCallback = (error) => {
  const { status } = error
  message.warn(`error: ${status}`)
  return Promise.reject(error)
}
instance.interceptors.response.use(successCallback, failedCallback)

export default instance
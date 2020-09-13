import { message } from 'antd'
import axios from 'axios'
import orgin from '../../envconfig'

const instance = axios.create({
  baseURL: orgin,
  withCredentials: true,
  'content-type': '*',
  headers: {
    // Authorization: `bearer`
  }
})

const successCallback = (response) => {
  const { data, status, statusText } = response
  return { data, status, statusText }
}
const failedCallback = (error) => {
  const { response } = error
  response && message.warn(`status: ${response.status}`)
  return Promise.reject(error)
}
instance.interceptors.response.use(successCallback, failedCallback)

export default instance
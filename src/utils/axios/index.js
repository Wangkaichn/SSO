import { message } from 'antd'
import axios from 'axios'
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
  return { data, status, statusText }
}
const failedCallback = ({ response }) => {
  message.success(`status: ${response.status}`)
  return Promise.reject(response)
}
instance.interceptors.response.use(successCallback, failedCallback)

export default instance
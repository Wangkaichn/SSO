import { message } from 'antd'
import axios from 'axios'
import orgin from '../../envconfig'


const successCallback = (response) => {
  const { data, status, statusText } = response
  return { data, status, statusText }
}
const failedCallback = (error) => {
  const { response } = error
  response && message.warn(`status: ${response.status}`)
  return Promise.reject(error)
}
function CreateAxios (options) {
  const instance = axios.create({
    baseURL: orgin,
    withCredentials: true,
    ...options
  })
  instance.interceptors.response.use(successCallback, failedCallback)
  return instance
}


export default new CreateAxios()
export { CreateAxios }
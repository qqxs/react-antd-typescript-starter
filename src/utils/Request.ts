/**
 * axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken, removeToken } from '@utils/auth'

// 请求超时时间
const instance = axios.create({
  timeout: 6000
})

// 请求拦截器
instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const noToken = (config.headers || {}).noToken === false
    const token = getToken() || ''
    if (token && !noToken) {
      config.headers['Authorization'] = 'Bearer ' + token // token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return Promise.resolve(response)
  },
  // 服务器状态码不是200的情况
  error => {
    const response = error.response
    if (response && response.status) {
      switch (response.status) {
        // 401: 未登录
        case 401:
          removeToken()
          // window.location.href = '/login'
          break
        // 其他错误，直接抛出错误提示
        default:
          if (response.status !== 401) {
            // 不要在这里提示信息 除非后天给的接口错误信息比较规范
            // message.error(response.data.message || requestMsg[response.status])
          }
          break
      }
    }
    return Promise.reject(error)
  }
)

export default instance

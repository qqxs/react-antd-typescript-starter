/**
 * axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
import { getToken, removeToken } from '@/utils/auth'

// 请求超时时间
const instance = axios.create({
  timeout: 6000
})

// 请求拦截器
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const noToken = (config.headers ?? { noToken: false }).noToken === false
    const token = getToken()
    if (Boolean(token) && !noToken && Boolean(config.headers)) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      config.headers.authorization = `Bearer ${token}` // token
    }
    return config
  },
  async error => {
    return await Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    return await Promise.resolve(response)
  },
  // 服务器状态码不是200的情况
  async error => {
    const response = error.response
    if (response?.status) {
      switch (response.status) {
        // 401: 未登录
        case 401:
          removeToken()
          window.location.href = '/login'
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
    return await Promise.reject(error)
  }
)

async function Axios<T = unknown>(
  configParam: AxiosRequestConfig
): Promise<Response.Common<T>> {
  return await instance
    .request<Response.Common<T>, AxiosResponse<Response.Common<T>>>(configParam)
    .then(res => res.data)
}

export default Axios

/**
 * axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios, { type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { getToken, removeToken } from '@/utils/auth';

// 请求超时时间
const instance = axios.create({
  timeout: 6000,
});

// 请求拦截器
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const noToken = (config.headers ?? { noToken: false }).noToken === false;
    const token = getToken();
    if (Boolean(token) && !noToken && Boolean(config.headers)) {
      config.headers.Authorization = `Bearer ${token}`; // token
    }
    return config;
  },
  async error => {
    return await Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    return await Promise.resolve(response);
  },
  // 服务器状态码不是200的情况
  async error => {
    const response = error.response;

    if (response?.status) {
      switch (response.status) {
        // 401: 未登录
        case 401:
          removeToken();

          if (!['/api/me'].includes(response?.config?.url)) {
            window.location.href = '/login';
          }
          break;
        // 其他错误，直接抛出错误提示
        default:
          if (response.status !== 401) {
            // 不要在这里提示信息 除非后天给的接口错误信息比较规范
            // message.error(response.data.message || requestMsg[response.status])
          }
          break;
      }
      // 处理接口返回的错误信息
      if (error.response) {
        error.message = error.response.data.message;
      } else if (error.request) {
        // 处理请求未得到响应的错误
        error.message = 'No response from server.';
      } else {
        // 处理其他错误
        error.message = 'Something went wrong.';
      }
    }

    return await Promise.reject(error);
  }
);

/**
 * axios 封装
 *
 * @param configParam axios config param
 * @returns Promise
 */
async function Axios<T = unknown>(configParam: AxiosRequestConfig): Promise<Response.Common<T>> {
  return await instance.request<Response.Common<T>, AxiosResponse<Response.Common<T>>>(configParam).then(res => res.data);
}

export default Axios;

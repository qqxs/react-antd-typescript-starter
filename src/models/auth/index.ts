import { type Request, type Response } from '@/typings'
import Axios from '@/utils/Axios'

/**
 *
 * @desc 登录
 * @link
 *
 * @method POST
 *
 * @return {Promise} 请求返回
 */
export async function postLogin(data: Request.LoginParams) {
  return await Axios<Response.Common<{ token: string }>>({
    url: '/api/v1/login',
    method: 'post',
    data
  })
}

/**
 *
 * @desc 退出登录
 * @link
 *
 * @method POST
 *
 * @return {Promise} 请求返回
 */
export function postLogout<T>(): any {
  return Axios<T>({
    url: '/api/v1/login_out',
    method: 'post'
  })
}

interface ResponseCaptcha {
  imageUrl: string
  captchaId: string
}
/**
 *
 * @desc 获取验证码
 * @link
 *
 * @method GET
 *
 * @return {Promise} 请求返回
 */
export async function getCaptcha() {
  return await Axios<Response.Common<ResponseCaptcha>>({
    url: '/api/v1/captcha'
  })
}

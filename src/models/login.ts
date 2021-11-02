import Request from '@utils/Request'
import { LoginParams } from '@containers/Login/Login'
/**
 *
 * @desc 登录
 * @link
 *
 * @method POST
 *
 * @return {Promise} 请求返回
 */
export function postLogin(data: LoginParams) {
  return Request({
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
export function postLogout() {
  return Request({
    url: '/api/v1/loginout',
    method: 'post'
  })
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
export function getCaptcha() {
  return Request({
    url: '/api/v1/captcha'
  })
}

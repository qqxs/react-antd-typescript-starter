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
  return await Axios<string>({
    url: '/api/login',
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
export function postLogout(): any {
  return Axios({
    url: '/api/login_out',
    method: 'post'
  })
}

interface ResponseCaptcha {
  image_url: string
  captcha_id: string
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
  return await Axios<ResponseCaptcha>({
    url: '/api/captcha'
  })
}

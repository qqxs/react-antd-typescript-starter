import Axios from '@/utils/Axios';

/**
 *
 * @desc 登录
 * @link
 *
 * @method POST
 *
 * @return {Promise} 请求返回
 */
export async function postLogin(data: Request.LoginBody) {
  return await Axios<string>({
    url: '/api/login',
    method: 'post',
    data,
  });
}

/**
 *
 * @desc 注册
 * @link
 *
 * @method POST
 *
 * @return {Promise} 请求返回
 */
export async function postRegister(data: Request.RegisterBody) {
  return await Axios({
    url: '/api/register',
    method: 'post',
    data,
  });
}

/**
 *
 * @desc 回去当前用户基本信息
 * @link
 *
 * @method GET
 *
 * @return {Promise} 请求返回
 */
export async function getMe() {
  return await Axios<Response.Me>({
    url: '/api/me',
  });
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
export function postLogout(): unknown {
  return Axios({
    url: '/api/login_out',
    method: 'post',
  });
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
  return await Axios<Response.Captcha>({
    url: '/api/captcha',
  });
}

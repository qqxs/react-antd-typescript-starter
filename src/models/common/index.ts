import Request from '@/utils/Axios'
/**
 *
 * @desc me信息
 * @link
 *
 * @method GET
 *
 * @return {Promise} 请求返回
 */
export const getMe = async () => {
  return await Request({
    url: '/api/v1/me'
  })
}

/**
 *
 * @desc 全局信息
 * @link
 *
 * @method GET
 *
 * @return {Promise} 请求返回
 */
export const getGlobal = async () => {
  return await Request({
    url: '/api/v1/global'
  })
}

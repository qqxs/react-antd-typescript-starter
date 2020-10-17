import Request from './Request'
/**
 *
 * @desc 省市区
 * @link https://www.tapd.cn/44290254/markdown_wikis/?#1144290254001001770
 *
 * @method GET
 *
 * @return {Promise} 请求返回
 */
export const getRegion = () => {
  return Request({
    url: '/api/v1/region'
  })
}

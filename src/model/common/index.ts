import Request from "../Request";
/**
 *
 * @desc me信息
 * @link
 *
 * @method GET
 *
 * @return {Promise} 请求返回
 */
export const getMe = () => {
  return Request({
    url: "/api/v1/me",
  });
};

/**
 *
 * @desc 全局信息
 * @link
 *
 * @method GET
 *
 * @return {Promise} 请求返回
 */
export const getGlobal = () => {
  return Request({
    url: "/api/v1/global",
  });
};

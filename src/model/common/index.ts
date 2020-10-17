import Request from "../Request";
/**
 *
 * @desc 登录账户信息
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

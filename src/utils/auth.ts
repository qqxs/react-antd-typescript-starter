import Cookies from 'js-cookie';

const TokenKey = 'token';

/**
 * 获取cookie中的token
 *
 * @returns {string | undefined}
 */
export function getToken(): string | undefined {
  return Cookies.get(TokenKey);
}

/**
 * 把token写入cookie
 *
 * @param token
 * @returns {string | undefined}
 */
export function setToken(token: string): string | undefined {
  return Cookies.set(TokenKey, `${token}`);
}

/**
 * 移除cookie中token
 */
export function removeToken() {
  Cookies.remove(TokenKey);
}

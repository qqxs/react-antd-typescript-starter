import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, `Bearer ${token}`)
}

export function removeToken() {
  Cookies.remove(TokenKey)
}

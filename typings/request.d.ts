declare namespace Request {
  export interface LoginParams {
    email: string
    password: string
    code: string
    captcha_id: string
  }
}

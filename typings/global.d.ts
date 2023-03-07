declare namespace RATS {
  export interface LoginParams {
    email: string
    password: string
    captcha: string
  }
}

declare namespace Request {
  export interface LoginParams {
    email: string
    password: string
    code: string
    captcha_id: string
  }
}

declare namespace Response {
  export interface Common<T> {
    code: number
    data: T
    msg?: string
  }
}

interface Window {
  __THEME__: Record<string, string | number> // antd theme
}

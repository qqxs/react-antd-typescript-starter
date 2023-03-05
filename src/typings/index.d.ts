export namespace RATS {
  export interface LoginParams {
    email: string
    password: string
    captcha: string
  }
}

export namespace Request {
  export interface LoginParams {
    email: string
    password: string
    captcha: string
  }
}

export namespace Response {
  export interface Common<T> {
    code: number
    data: T
    msg?: string
  }
}

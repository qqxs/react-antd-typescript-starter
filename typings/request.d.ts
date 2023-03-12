declare namespace Request {
  export interface LoginBody {
    email: string
    password: string
    code: string
    captcha_id: string
  }

  export interface RegisterBody {
    name: string
    email: string
    password: string
    confirm_password: string
    gender: string // man
    age: number
    avatar: string
  }
}

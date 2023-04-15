/**
 * 请求参数
 */
declare namespace Request {
  /** 登录请求参数 */
  export interface LoginBody {
    email: string;
    password: string;
    code: string;
    captcha_id: string;
  }

  /** 注册请求参数 */
  export interface RegisterBody {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    gender: string; // man
    age: number;
    avatar: string;
  }
}

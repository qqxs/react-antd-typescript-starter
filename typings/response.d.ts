/**
 * 通用Response返回结果
 */
declare namespace Response {
  /** 通用返回结果 */
  export interface Common<T> {
    code: number;
    data: T;
    msg?: string;
    error?: string[];
  }

  /** Redux state , 每项state的value */
  export interface ReduxState<T> {
    status: keyof typeof ResponseStatus; // RE
    result: T;
    error?: string;
  }

  /** 登录返回用户信息结果 */
  export interface Me {
    email: string;
    name: string;
    id: number;
    avatar: string;
    age: number;
    is_active: 0 | 1; // 0 是未激活
    role_id: number;
  }

  /** 获取验证码返回结果 */
  export interface Captcha {
    image_url: string;
    captcha_id: string;
  }
}

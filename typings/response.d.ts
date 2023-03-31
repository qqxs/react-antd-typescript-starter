declare namespace Response {
  export interface Common<T> {
    code: number;
    data: T;
    msg?: string;
    error?: string[];
  }

  export interface ReduxState<T> {
    status: keyof typeof ResponseStatus;
    result: T;
    error?: string;
  }

  export interface Me {
    email: string;
    name: string;
    id: number;
    avatar: string;
    age: number;
    is_active: 0 | 1; // 0 是未激活
    role_id: number;
  }
}

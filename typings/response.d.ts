declare namespace Response {
  export interface Common<T> {
    code: number
    data: T
    msg?: string
  }

  export interface Me {
    email: string
  }
}

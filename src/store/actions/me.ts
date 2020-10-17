export interface IMe {
  id: number;
  [propsKey: string]: any;
}

export const TYPESETME = "SET_ME";
// 设置me数据
export function setMe(data: IMe) {
  return {
    type: TYPESETME,
    data,
  };
}

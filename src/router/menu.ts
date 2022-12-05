export interface ISiderMenu {
  name: string
  path?: string // 链接跳转
  title: string
  icon?: string
  children?: ISiderMenu[]
  auth?: number[]
  show?: boolean //当有auth时 是否显示其他路由和是否显示当前auth的路由
}
// 左侧菜单
export const siderMenu: ISiderMenu[] = [
  {
    name: 'home',
    path: '/home',
    title: '首页',
    icon: 'home'
  },
  {
    name: 'cus',
    title: '客户管理',
    icon: 'dashboard',
    children: [
      {
        name: 'list',
        title: '列表',
        path: '/cus/list'
      },
      {
        name: 'detail',
        title: '详情',
        path: '/cus/99/detail'
      }
    ]
  }
]

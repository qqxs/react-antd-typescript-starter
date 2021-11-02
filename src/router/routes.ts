import React, { lazy } from 'react'
import { RouteConfig } from 'react-router-config'
import HomeRender from '@containers/Home/Render'

export interface IBread {
  name: string
  path?: string
}

const lazyComponent: (componentPath: string) => React.ComponentType = (
  componentPath: string
) => {
  if (/src\//.test(componentPath)) {
    return lazy(() => import(componentPath))
  }
  return lazy(() => import(`src/containers/${componentPath}`))
}

type Roles = 'user' | 'admin'
export interface IRoutes extends RouteConfig {
  defaultRouter?: number
  routes?: IRoutes[]
  bread?: IBread[]
  meta?: {
    needLoginAuth: boolean
    rolesAuth?: Roles[]
  }
}

export const routes: IRoutes[] = [
  {
    path: '/login',
    component: lazyComponent('Login/Login'),
    exact: true,
    meta: {
      needLoginAuth: false
    }
  },
  {
    path: '/register',
    component: lazyComponent('Register/Register'),
    exact: true
  },
  {
    path: '/404',
    component: lazyComponent('NotFound/NotFound'),
    exact: true
  },
  {
    path: '/',
    component: HomeRender,
    defaultRouter: 0,
    routes: [
      {
        path: '/home',
        name: '首页',
        component: lazyComponent('Home/Home'),
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin']
        }
      },
      {
        path: '/cus',
        name: '客户管理',
        component: lazyComponent('Home/Cus/Cus'),
        defaultRouter: 0,
        meta: {
          needLoginAuth: true,
          rolesAuth: ['user', 'admin']
        },
        routes: [
          {
            path: '/cus/list',
            name: '列表',
            exact: true,
            component: lazyComponent('Home/Cus/List/List'),
            bread: [{ name: '客户管理' }]
          },
          {
            path: '/cus/:id/detail',
            name: '详情',
            exact: true,
            component: lazyComponent('Home/Cus/Detail/Detail'),
            bread: [{ name: '客户管理' }]
          }
        ]
      }
      // {
      //   path: '/*',
      //   component: lazyComponent('NotFound/Redirect')
      // }
    ]
  }
]

export const defaultRoute = routes[3].routes ? routes[3].routes[0] : routes[0]

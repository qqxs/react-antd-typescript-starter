import {
  Home,
  HomeList,
  HomeDetail,
  Login,
  Profile,
  NotFount
} from '../containers'

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    component: Home,
    path: '/home',
    routes: [
      {
        path: '/home/list',
        component: HomeList,
        routes: []
      },
      {
        path: '/home/detail/:id',
        component: HomeDetail
      },
      {
        path: '/home/detail',
        component: HomeDetail
      }
    ]
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '*',
    component: NotFount
  }
]

export default routes

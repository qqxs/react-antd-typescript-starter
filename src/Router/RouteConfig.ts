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
        path: '/home/list/:id',
        component: HomeList
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

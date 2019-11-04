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
    path: '/home',
    component: Home,
    routes: [
      {
        path: '/home/list',
        component: HomeList,
        auth: 1
        // routes: [
        //   {
        //     path: '/home/bus/ss',
        //     component: Profile
        //   }
        // ]
      },
      {
        path: '/home/list/:id',
        component: HomeList,
        auth: 2
        // routes: [
        //   {
        //     path: '/home/list/:id/:num',
        //     component: HomeList
        //   }
        // ]
      },
      {
        path: '/home/detail',
        component: HomeDetail,
        auth: [1, 2, 3]
      }
    ]
  },
  {
    path: '/profile',
    component: Profile,
    private: 0
  },
  {
    path: '*',
    component: NotFount
  }
]

export default routes

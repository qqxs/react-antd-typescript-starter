import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Auth from '@/components/Auth/auth'

import Layout from '@/components/Layout'
// page
import Login from '@/page/login/login'
import Register from '@/page/register/register'
import Home from '@/page/home/home'
// ------------------ auth page ---------------------------
import Profile from './page/profile/profile'
// ------------------ end auth page -----------------------
import Error404 from '@/page/error/404'
// import Hello from './page/hello'
// end page

export const router = createBrowserRouter(
  [
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        // auth router
        {
          path: '/',
          element: <Auth />,
          children: [
            {
              path: '/profile',
              element: <Profile />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <Error404 />
    }
  ],
  {
    basename: '/'
  }
)

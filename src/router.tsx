import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Auth from '@/components/Auth/auth'

// page
import Home from '@/page/home/home'
// import Hello from '@/page/hello'
import Login from '@/page/login/login'
import Register from '@/page/register/register'

import Error404 from '@/page/error/404'
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
      element: <Auth />,
      children: [
        {
          index: true,
          element: <Home />
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

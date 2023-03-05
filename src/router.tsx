import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/home'

import Hello from './page/hello'

import Login from './page/login/login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/hello',
    element: <Hello /> // React.lazy(() => import("./routes/hello"))
  },
  {
    path: '/login',
    element: <Login /> // React.lazy(() => import("./routes/hello"))
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router

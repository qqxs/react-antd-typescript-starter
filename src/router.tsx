import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
// page
import Home from '@/page/home/home'
import Hello from '@/page/hello'
import Login from '@/page/login/login'
// end page

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/hello',
    element: <Hello />
  },
  {
    path: '/login',
    element: <Login />
  }
])

function Router() {
  return (
    <ConfigProvider
      theme={{
        token: $__THEME__$ // vite global
      }}
    >
      <div className="_page_">
        <React.Suspense fallback={<>...</>}>
          <RouterProvider router={router} />
        </React.Suspense>
      </div>
    </ConfigProvider>
  )
}

export default Router

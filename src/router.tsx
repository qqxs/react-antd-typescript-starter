import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'

// page
import Home from '@/page/home/home'
import Hello from '@/page/hello'
import Login from '@/page/login/login'

import Error404 from '@/page/error/404'
// end page

function ErrorFallback(props: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  )
}

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
  },
  {
    path: '/404',
    element: <Error404 />
  }
])

function Router() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
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
    </ErrorBoundary>
  )
}

export default Router

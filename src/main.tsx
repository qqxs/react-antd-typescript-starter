import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { store } from './store'
import { router } from './router'

import 'normalize.css'

import './index.scss'

function ErrorFallback(props: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <Provider store={store}>
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
    </Provider>
  </ErrorBoundary>
  // </React.StrictMode>
)

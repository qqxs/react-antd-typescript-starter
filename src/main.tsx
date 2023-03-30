import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from '@/components/ErrorBoundary';
import Loading from '@/components/Loading';

import { store } from './store';
import { router } from './router';

import InitSentry from './sentry';

import 'normalize.css';

import './index.scss';

if ($__SENTRY__$) {
  // 初始化Sentry
  InitSentry();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ErrorBoundary>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: $__THEME__$, // vite global
        }}
      >
        <React.Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </React.Suspense>
      </ConfigProvider>
    </Provider>
  </ErrorBoundary>,
  // </React.StrictMode>
);

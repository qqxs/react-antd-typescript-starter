import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/components/ErrorBoundary';
import Loading from '@/components/Loading';
import { store } from './store';
import { router } from './router';

import './index.scss';

if ($__SENTRY__$) {
  // 初始化Sentry
  import('./sentry').then(({ default: InitSentry }) => {
    InitSentry();
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ErrorBoundary>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: $__THEME__$, // vite global antd5 theme
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/components/ErrorBoundary';
import Loading from '@/components/Loading';
import { store } from './store';
import { router } from './router';
import Logger from '@skax/logger';

import './index.scss';

const logger = new Logger({
  // No show log,info,debug in production, only show warn,error
  level: process.env.NODE_ENV === 'production' ? 'WARN' : 'DEBUG',
});

window.logger = logger;

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

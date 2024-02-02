import React from 'react';
import ReactDOM from 'react-dom/client';
import Logger from '@ezuikit/utils-logger';
import { type LoggerCls } from '@ezuikit/utils-logger/dist/types/logger';
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/components/ErrorBoundary';
import Loading from '@/components/Loading';
import { store } from './store';
import { router } from './router';

import './index.scss';

const logger: LoggerCls = Logger({
  level: process.env.NODE_ENV === 'production' ? 'ERROR' : 'INFO',
  name: 'RATS',
  showTime: true,
});

// global logger
window.logger = logger;

if ($__SENTRY__$) {
  // init Sentry
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

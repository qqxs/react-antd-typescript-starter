import ReactDOM from 'react-dom/client';
import Logger from '@ezuikit/utils-logger';
import { type LoggerCls } from '@ezuikit/utils-logger/dist/types/logger';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/components/ErrorBoundary';
import { store } from './store';
import Page from './page';
import './index.scss';

const logger: LoggerCls = Logger({
  level: process.env.NODE_ENV === 'production' ? 'ERROR' : 'INFO',
  name: 'RATS',
  showTime: true,
});

/** global logger */
window.logger = logger;

if (__SENTRY__) {
  // init Sentry
  import('./sentry').then(({ default: InitSentry }) => {
    InitSentry();
  });
}
console.log(__THEME__);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ErrorBoundary>
    <Provider store={store}>
      <Page />
    </Provider>
  </ErrorBoundary>
  // </React.StrictMode>
);

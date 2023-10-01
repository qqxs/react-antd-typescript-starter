import * as Sentry from '@sentry/react';

/**
 * 出初始化Sentry
 */
function InitSentry() {
  // https://docs.sentry.io/platforms/javascript/guides/react/
  Sentry.init({
    // https://develop.sentry.dev/sdk/overview/
    // config your sentry
    dsn: '__DSN__', // 'https://examplePublicKey@o0.ingest.sentry.io/0'
    integrations: [new Sentry.BrowserTracing()],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

export default InitSentry;

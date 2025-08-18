import * as Sentry from '@sentry/react';

/**
 * Init sentry
 */
function InitSentry() {
  // https://docs.sentry.io/platforms/javascript/guides/react/
  Sentry.init({
    // https://develop.sentry.dev/sdk/overview/
    // config your sentry
    // eslint-disable-next-line no-undef
    dsn: __SENTRY__DSN__, // 'https://examplePublicKey@o0.ingest.sentry.io/0'
    integrations: [
      Sentry.browserTracingIntegration({
        // disable automatic span creation
        instrumentNavigation: false,
        instrumentPageLoad: false,
      }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    tracesSampleRate: 1.0,

    // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
    tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

export default InitSentry;

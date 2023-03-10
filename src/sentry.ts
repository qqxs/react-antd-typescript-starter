import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

/**
 * 出初始化Sentry
 */
function InitSentry() {
  if ($__SENTRY__$) {
    // https://docs.sentry.io/platforms/javascript/guides/react/
    Sentry.init({
      // https://develop.sentry.dev/sdk/overview/
      // config your sentry
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      integrations: [new BrowserTracing()],
      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0
    })
  }
}

export default InitSentry

import type React from 'react';

import { ErrorBoundary as ReactErrorBoundary, type FallbackProps } from 'react-error-boundary';

function ErrorFallback(props: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  );
}

const ErrorBoundary: React.FC<React.PropsWithChildren> = props => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}>
      {props.children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;

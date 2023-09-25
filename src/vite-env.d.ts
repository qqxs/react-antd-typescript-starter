/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vite/client" />

declare const $__THEME__$: Record<string, any>;

declare const $__SENTRY__$: boolean;

interface Window {
  logger: Logger;
}

declare global {
  const window: Window;
}

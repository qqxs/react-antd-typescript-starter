/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="./request.d.ts"/>
/// <reference types="./response.d.ts"/>

declare const $__THEME__$: Record<string, any>;

declare const $__SENTRY__$: boolean;

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
declare const logger: import('@ezuikit/utils-logger').LoggerCls;

interface Window {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  logger: import('@ezuikit/utils-logger').LoggerCls;
}
declare global {
  const window: Window;
}

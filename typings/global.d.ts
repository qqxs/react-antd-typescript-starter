/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="@skax/logger/types/index.d.ts" />
/// <reference types="./request.d.ts"/>
/// <reference types="./response.d.ts"/>

declare const $__THEME__$: Record<string, any>;

declare const $__SENTRY__$: boolean;

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
declare const logger: import('@skax/logger').default;

interface Window {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  logger: import('@skax/logger').default;
}
declare global {
  const window: Window;
}

interface Window {
  location: Object
  BUILD_ENV: string
  _global: {
    qiniu_domain: string
  }
  particlesJS: any
}

declare var window: Window
declare var Math: Math
declare var Date: Date

declare module 'particles.js'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'
import compression from 'vite-plugin-compression'
import path from 'path'

import sassVar2JSON from './scripts/sass-to-json'

const theme = sassVar2JSON()

// console.log('sassVar2JSON', theme)

const OPEN_SENTRY: boolean = false // process.env.NODE_ENV === 'production' // open sentry
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, '')
      },
      // 图片上传
      '/images': {
        target: 'http://localhost:8080',
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        /**
         * 以对象的方式使用
         * 例如 lodash 模块打包成一个 chunk，名称是 lodash
         */
        manualChunks: {
          dll: [
            'react',
            'react-dom',
            'react-router-dom',
            'axios',
            'redux',
            'react-redux',
            '@reduxjs/toolkit',
            'classnames'
          ],
          sentry: OPEN_SENTRY ? ['@sentry/react', '@sentry/tracing'] : []
        }
      }
    }
  },
  define: {
    $__THEME__$: theme, // antd theme
    $__SENTRY__$: OPEN_SENTRY // process.env.NODE_ENV === 'production' // open sentry
  },
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    compression()
  ]
})

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import path from 'path'

import sassVar2JSON from './scripts/sass-to-json'

const theme = sassVar2JSON()

// console.log('sassVar2JSON', theme)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
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
         * 1.以对象的方式使用
         * 将 lodash 模块打包成一个 chunk，名称是 lodash
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
          ]
        }
      }
    }
  },
  define: {
    $__THEME__$: theme // antd theme
  },
  plugins: [react()]
})

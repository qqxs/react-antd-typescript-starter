import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)

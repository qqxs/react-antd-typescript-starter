import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootEl = document.getElementById('root')

ReactDOM.render(
  //   <React.StrictMode>
  <App />,
  //   </React.StrictMode>,
  rootEl
)

if ((module as any).hot) {
  ;(module as any).hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp />, rootEl)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

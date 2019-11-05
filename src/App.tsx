import React, { memo } from 'react'
import logo from './logo.svg'
import './App.less'
import { Button } from 'antd'
import Router from './Router'

const App: React.FC = () => {
  console.log(window['helloWorld'])
  console.log(window.location)

  return (
    <div className="App">
      <Button>antd button</Button>
      <main>
        <Router />
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactss
        </a>
      </header>
    </div>
  )
}

export default memo(App)

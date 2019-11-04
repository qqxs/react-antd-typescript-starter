import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'

const App: React.FC = () => {
  console.log(window['helloWorld'])
  console.log(window.location)

  return (
    <div className="App">
      <Button>antd button</Button>
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

export default App

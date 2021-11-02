import React from 'react'
import { classPrefix } from '@constant'
import logo from '../../logo.svg'
import { Button } from 'antd'

const Home = () => {
  return (
    <div className={`${classPrefix}_home`} style={{ display: 'flex', flex: 1 }}>
      <div className="App">
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
            Learn React
          </a>
          <Button type="primary">Button</Button>
        </header>
      </div>
    </div>
  )
}

export default Home

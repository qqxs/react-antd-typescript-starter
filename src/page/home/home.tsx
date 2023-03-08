import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import reactLogo from '@/assets/react.svg'

import './home.scss'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="_page-home">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            className="logo ts"
            alt="typescript logo"
          />
        </a>
      </div>
      <h1>Vite + React + Ts</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/home/home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite、React and Ts logos to learn more
      </p>{' '}
      {/* <Link to="/login">login</Link> */}
    </div>
  )
}

export default Home

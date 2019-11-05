import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, Link } from 'react-router-dom'
import routes from './RouteConfig'

const Router = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/login">LOGIN</Link>
      </li>
      <li>
        <Link to="/home">HOME</Link>
      </li>
      <li>
        <Link to="/home/list">HOME LIST</Link>
      </li>
      <li>
        <Link to="/home/list/100">HOME LIST 100</Link>
      </li>
      <li>
        <Link to="/home/detail">HOME DETAIL</Link>
      </li>
      <li>
        <Link to="/profile">PROFILE</Link>
      </li>
    </ul>
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default Router

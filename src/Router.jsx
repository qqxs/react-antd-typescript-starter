import React from 'react'
import { BrowserRouter, Switch, Link } from 'react-router-dom'
import routes from './Route/RouteConfig'
import RouteWithSubRoutes from './Route/RouteWithSubRoutes'
const Router = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
          <br />
          <Link to="/home/list">home list</Link>
          <br />
          <Link to="/home/list/100">home list 100</Link>
          <br />
          <Link to="/home/detail">home detail</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
    </div>
    <Switch>
      {routes
        ? routes.map((r, i) => {
            console.log(r)
            return <RouteWithSubRoutes key={i} {...r} author={2} />
          })
        : null}
    </Switch>
  </BrowserRouter>
)

export default Router

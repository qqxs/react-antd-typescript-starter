import React from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

interface IProps extends RouteConfig {
  children?: any
}

const Home = (props: IProps) => {
  console.log(props.route.routes)
  return (
    <div>
      Home
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default Home

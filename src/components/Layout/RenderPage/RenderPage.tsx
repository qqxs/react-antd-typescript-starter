import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { IRoutes } from 'src/router/routes'
import { classPrefix } from 'src/const/index'

import './RenderPage.scss'

export interface IRenderPageProps {
  route?: IRoutes
  className?: string
}

const RenderPage = (props: IRenderPageProps) => {
  const { route } = props
  if (!route) {
    return null
  }

  const defaultRoute = route.routes
    ? route.routes[route.defaultRoute || 0]
    : route

  const MatchRoute = matchRoutes(
    route.routes ? route.routes : [route],
    window.location.pathname
  )

  return (
    <Layout.Content className={classPrefix + '_layout-renderpage'}>
      {MatchRoute.length ? (
        renderRoutes(route.routes, { defaultRoute })
      ) : (
        <Route component={defaultRoute.component} />
      )}
    </Layout.Content>
  )
}

export default RenderPage

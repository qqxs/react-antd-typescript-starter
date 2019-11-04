import React, { memo } from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

export interface NewRouteProps extends RouteProps {
  auth?: number | number[] // Add authority
  routes?: any[]
  author: number
}

function RouteWithSubRoutes(route: NewRouteProps) {
  return (
    <Route
      path={route.path}
      render={props => {
        // pass the sub-routes down to keep nesting
        if (route.component) {
          return (
            <route.component {...props}>
              {route.routes ? (
                <Switch>
                  {route.routes.map(r => {
                    if (
                      (r.auth &&
                        Array.isArray(r.auth) &&
                        r.auth.includes(route.author)) ||
                      r.auth === route.author
                    ) {
                      console.log(r.path, r.auth, route.author)
                      return <RouteWithSubRoutes {...r} key={r.path} />
                    } else if (!r) {
                      return <RouteWithSubRoutes {...r} key={r.path} />
                    } else {
                      return null //<Redirect to="/404" key={404} />
                    }
                  })}
                </Switch>
              ) : null}
            </route.component>
          )
        }

        return null
      }}
    />
  )
}

export default memo(RouteWithSubRoutes)

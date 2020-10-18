import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { SiderMenu, Header as HeaderCom, Image } from 'src/components'
import { classPrefix } from 'src/const'

import {
  getMe as getMeModel,
  getGlobal as getGlobalModel
} from 'src/model/common'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MeActions from 'src/store/actions/me'

import { siderMenu, ISiderMenu } from 'src/router/menu'
import { IRoutes } from 'src/router/routes'
import './Render.scss'

const { Header, Sider } = Layout

interface IProps extends RouteConfig {
  children?: any
  actions: any
}

const FallbackLoading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}
  ></div>
)

const Home = (props: IProps) => {
  const [user, setUser] = useState({})
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(true)

  const [routes, setRoutes] = useState<IRoutes[]>(props.route.routes)
  const [menus, setMenus] = useState<ISiderMenu[]>(siderMenu)

  useEffect(() => {
    const getMe = getMeModel()
    const getGlobal = getGlobalModel()

    Promise.all([getMe, getGlobal])
      .then(function (values) {
        if (values[0].data.code === 200 && values[1].data.code === 200) {
          const user = values[0].data.data.user
          setUser(user)
          // store me
          props.actions.setMe(values[0].data.data.user)
          // props.actions.setInitSate({
          //   init: user.corp.init_status === 1 ? true : false
          // })
          // 设置权限路由
          // const routes = authRoutes(props.route.routes, user.corp.type || 0)
          // setRoutes(routes)
          // // 匹配当前pathname 是否在当前路由中
          // const branch = matchRoutes(routes, location.pathname)
          // if (branch.length === 0) {
          //   // eslint-disable-next-line no-unused-expressions
          //   if (routes && routes.length > 0) {
          //     const path = routes[0].path as string
          //     history.push(path)
          //   }
          // }
          // const menus = authMenus(siderMenu, user.corp.type || 0)
          // setMenus(menus)

          setTimeout(() => setLoading(false), 50)
        }
      })
      .catch(() => {
        setLoading(false)
      })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.actions, props.route.routes])

  const handleCollapse = useCallback((collapsed: boolean) => {
    setCollapsed(collapsed)
  }, [])

  const handleToggle = useCallback((collapsed: boolean) => {
    setCollapsed(!collapsed)
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      ></div>
    )
  }

  return (
    <Layout className={classPrefix + '_layout'}>
      <Sider
        collapsed={collapsed}
        onCollapse={handleCollapse}
        width={180}
        className={classPrefix + '_layout-sider'}
      >
        <Link to="/home">
          <div
            className={`${classPrefix}_layout-sider-logo ${
              collapsed ? classPrefix + '_layout-sider-logo-collapsed' : ''
            }`}
          >
            <Image src="" alt="企推宝" />
            <h1>craco</h1>
          </div>
        </Link>
        <div>
          <SiderMenu
            menus={menus}
            className={classPrefix + '_layout-sider-menu'}
          />
        </div>
      </Sider>
      <Layout className={classPrefix + '_right-layout'}>
        <Header className={classPrefix + '_right-layout-header'}>
          <HeaderCom collapsed={collapsed} onToggle={handleToggle} />
        </Header>
        <Suspense fallback={<FallbackLoading />}>
          {renderRoutes(routes)}
        </Suspense>
      </Layout>
    </Layout>
  )
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(
      Object.assign({
        setMe: MeActions.setMe
      }),
      dispatch
    )
  }
}

export default connect(null, mapDispatchToProps)(Home)

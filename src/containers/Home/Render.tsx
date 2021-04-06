import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { SiderMenu, Header, Image } from 'src/components'
import { classPrefix } from 'src/const'

import {
  getMe as getMeModel,
  getGlobal as getGlobalModel
} from 'src/model/common'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MeActions from 'src/store/actions/me'

// import { siderMenu, ISiderMenu } from 'src/router/menu'
import { siderMenu } from 'src/router/menu'
// import { IRoutes } from 'src/router/routes'
import './Render.scss'
import FE from 'src/assets/images/FE.png'

const { Sider } = Layout

interface IProps extends RouteConfig {
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

const Home: React.FC<IProps> = (props: IProps) => {
  // const [user, setUser] = useState({})
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(true)
  const routes = props.route.routes
  const menus = siderMenu
  // const [routes, setRoutes] = useState<IRoutes[]>(props.route.routes)
  // const [menus, setMenus] = useState<ISiderMenu[]>(siderMenu)

  useEffect(() => {
    const getMe = getMeModel()
    const getGlobal = getGlobalModel()

    Promise.all([getMe, getGlobal])
      .then(function (values) {
        if (values[0].data.code === 200 && values[1].data.code === 200) {
          // const user = values[0].data.data.user
          // setUser(user)
          // store me
          props.actions.setMe(values[0].data.data.user)
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
          height: '100vh',
          flex: 1
        }}
      >
        <svg
          style={{ margin: 'auto', background: '#fff', display: 'block' }}
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="27.5" cy="57.5" r="5" fill="#fe718d">
            <animate
              attributeName="cy"
              calcMode="spline"
              keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
              repeatCount="indefinite"
              values="57.5;42.5;57.5;57.5"
              keyTimes="0;0.3;0.6;1"
              dur="1s"
              begin="-0.6s"
            ></animate>
          </circle>
          <circle cx="42.5" cy="57.5" r="5" fill="#f47e60">
            <animate
              attributeName="cy"
              calcMode="spline"
              keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
              repeatCount="indefinite"
              values="57.5;42.5;57.5;57.5"
              keyTimes="0;0.3;0.6;1"
              dur="1s"
              begin="-0.44999999999999996s"
            ></animate>
          </circle>
          <circle cx="57.5" cy="57.5" r="5" fill="#f8b26a">
            <animate
              attributeName="cy"
              calcMode="spline"
              keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
              repeatCount="indefinite"
              values="57.5;42.5;57.5;57.5"
              keyTimes="0;0.3;0.6;1"
              dur="1s"
              begin="-0.3s"
            ></animate>
          </circle>
          <circle cx="72.5" cy="57.5" r="5" fill="#abbd81">
            <animate
              attributeName="cy"
              calcMode="spline"
              keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
              repeatCount="indefinite"
              values="57.5;42.5;57.5;57.5"
              keyTimes="0;0.3;0.6;1"
              dur="1s"
              begin="-0.15s"
            ></animate>
          </circle>
        </svg>
      </div>
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
            <Image src={FE} alt="FE" />
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
        <Header
          className={classPrefix + '_right-layout-header'}
          collapsed={collapsed}
          onToggle={handleToggle}
        ></Header>
        <Layout.Content className={classPrefix + '_right-layout-content'}>
          <Suspense fallback={<FallbackLoading />}>
            {renderRoutes(routes)}
          </Suspense>
        </Layout.Content>
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

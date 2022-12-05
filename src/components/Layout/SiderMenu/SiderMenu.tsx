import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { ISiderMenu } from 'src/router/menu'
import classnames from 'classnames'
import { classPrefix } from '@constant'
import './SiderMenu.scss'

const { SubMenu } = Menu

interface ISiderMenuProps {
  className?: string
  menus: ISiderMenu[]
}

const renderMenu = (menus: ISiderMenu[]) => {
  return menus.map((menu: ISiderMenu, index: number) => {
    if (!!!menu.items || menu.items.length === 0) {
      return (
        <Menu.Item key={menu.path}>
          <Link to={menu.path || '/'}>
            {/* {menu.icon ? <Icon type={menu.icon} /> : null} */}
            <span>{menu.title}</span>
          </Link>
        </Menu.Item>
      )
    } else if (menu.items && menu.items.length) {
      return (
        <SubMenu
          key={'/' + menu.name}
          title={
            <span>
              {/* <Icon type={menu.icon} /> */}
              <span>{menu.title}</span>
            </span>
          }
        >
          {renderMenu(menu.items)}
        </SubMenu>
      )
    } else {
      return null
    }
  })
}

const SiderMenu = (props: ISiderMenuProps) => {
  const { className, menus } = props
  const classNames = classnames(`${classPrefix}_sider_menu`, className)

  let location = useLocation()
  const pathArr = location.pathname.split('/')
  //   最多获取两层路由
  const selectedKeys = pathArr.slice(0, 3).join('/')

  return (
    <Menu
      theme="dark"
      selectedKeys={[selectedKeys]}
      mode="inline"
      className={classNames}
    >
      {renderMenu(menus)}
    </Menu>
  )
}

export default SiderMenu

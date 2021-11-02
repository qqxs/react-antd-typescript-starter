import React, { memo, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  CloudDownloadOutlined
} from '@ant-design/icons'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
import { classPrefix } from '@constant'
import './Header.scss'

interface IHeaderProps {
  collapsed?: boolean
  onToggle?: any
  className?: string
}

const Header: React.FC<IHeaderProps> = memo((props: IHeaderProps) => {
  const { onToggle, className } = props

  const [collapsed, setCollapsed] = useState(false)

  const classNames = classnames(classPrefix + '-layout-header', className)

  const handleToggle = useCallback(() => {
    setCollapsed(!collapsed)
    if (typeof onToggle === 'function') {
      onToggle()
    }
  }, [collapsed, onToggle])

  return (
    <Layout.Header className={classNames}>
      <div className="left">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: handleToggle
          }
        )}
      </div>

      <div className="right">
        <Link to="/bell">
          <BellOutlined />
        </Link>
        <Link to="/download">
          <CloudDownloadOutlined />
        </Link>
        {/* <User user={user} /> */}
      </div>
    </Layout.Header>
  )
})
const mapStateToProps = (state: any) => {
  return {
    initState: { ...state.initstate }
  }
}
export default connect(mapStateToProps)(Header)

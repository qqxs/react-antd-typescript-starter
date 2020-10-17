import React, { memo } from 'react'
import { connect } from 'react-redux'

interface IHeaderProps {
  collapsed?: boolean
  onToggle?: any
}

const Header = memo((props: IHeaderProps) => {
  const { collapsed, onToggle } = props

  return (
    <>
      <div className="left">
        {/* <Icon
          onClick={() => onToggle(collapsed)}
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
        /> */}
        <span onClick={() => onToggle(collapsed)}>ICON</span>
      </div>

      <div className="right">
        {/* <Link to="/download" className="icon-item" title="消息">
          <Icon type="bell" />
        </Link>
        <Link to="/download" className="icon-item" title="下载">
          <Icon type="download" />
        </Link> */}
        {/* <User user={user} /> */}
      </div>
    </>
  )
})
const mapStateToProps = (state: any) => {
  return {
    initState: { ...state.initstate }
  }
}
export default connect(mapStateToProps)(Header)

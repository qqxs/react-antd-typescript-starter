import React from 'react'

class ErrorBoundary extends React.Component<any, any> {
  componentDidCatch(error: any, errorInfo: any) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, errorInfo)
  }

  render() {
    return this.props.children
  }
}

export default ErrorBoundary

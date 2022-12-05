import React from 'react'

function unhandledrejection(error: any) {
  console.log('unhandledrejection: ', error)
}
class ErrorBoundary extends React.Component<any, any> {
  componentDidCatch(error: any, errorInfo: any) {
    // 你同样可以将错误日志上报给服务器
    console.log('ErrorBoundary', error, errorInfo)
  }

  componentDidMount(): void {
    window.addEventListener('unhandledrejection', unhandledrejection)
  }

  componentWillUnmount(): void {
    window.removeEventListener('unhandledrejection', unhandledrejection)
  }

  render() {
    return this.props.children
  }
}

export default ErrorBoundary

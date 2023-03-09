import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getMe } from '@/models/auth'

const Auth = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getMe()
      .then(res => {
        if (res.code === 0) {
          setLoading(false)
        }
      })
      .catch(() => {})
  }, [])

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          color: '#fff'
        }}
      >
        Loading
      </div>
    )
  }

  return <Outlet />
}

export default Auth

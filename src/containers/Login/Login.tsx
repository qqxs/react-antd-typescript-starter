import React, { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import 'particles.js'
import { Form, Input, Button, Row, Col, message } from 'antd'
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons'
import { postLogin, getCaptcha } from '@models/login'
import { classPrefix } from '@constant'
import FE from '@assets/images/FE.png'
import './Login.scss'
import { setToken } from '@utils/auth'

export type LoginParams = {
  email: string
  password: string
  captcha: string
}

const Login = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [codeImg, setCodeImg] = useState('')
  const [captchaID, setCaptchaID] = useState('')

  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        events: {
          onclick: {
            enable: false
          },
          resize: true
        }
      },
      retina_detect: true
    })
  }, [])

  useEffect(() => {
    handleCaptcha()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCaptcha = useCallback(() => {
    getCaptcha().then(res => {
      console.log(res.data)
      setCodeImg('http://localhost:8080' + res.data.imageUrl)
      setCaptchaID(res.data.captchaId)
    })
  }, [])

  const onFinish = useCallback(
    (values: any) => {
      console.log(values)
      setLoading(true)
      values['captchaID'] = captchaID

      postLogin(values)
        .then(res => {
          console.log(res.data)
          if (res.data.code === 0) {
            setToken(res.data.data.token)
            history.push('/')
          } else {
            message.error(res.data.msg || '')
            setLoading(false)
            handleCaptcha()
          }
        })
        .catch(error => {
          console.log(error.response)
          setLoading(false)
        })
    },
    [history, captchaID, handleCaptcha]
  )

  return (
    <div className={`${classPrefix}_login`} id="particles-js">
      <div className={`${classPrefix}_login-content`}>
        <div className={`${classPrefix}_login-content-left`}>
          <img src={FE} alt="fe" className="logo" />
        </div>
        <div className={`${classPrefix}_login-content-right`}>
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: '请输入邮箱!' },
                { type: 'email', message: '请输入有效邮箱!' }
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="邮箱"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item className="captcha">
              <Row justify="space-between">
                <Col span={14}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: '请输入验证码!'
                      }
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="验证码"
                      prefix={<SafetyOutlined />}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  {/* <Button size="large">captcha</Button> */}
                  <img src={codeImg} alt="验证码" onClick={handleCaptcha} />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
                block
                loading={loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login

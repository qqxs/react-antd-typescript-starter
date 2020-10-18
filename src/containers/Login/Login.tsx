import React, { useEffect } from 'react'
import 'particles.js'
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons'
import { classPrefix } from 'src/const'
import FE from 'src/assets/images/FE.png'
import './Login.scss'

const Login = () => {
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

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

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
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
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
            <Form.Item>
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
                  <Button size="large">captcha</Button>
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

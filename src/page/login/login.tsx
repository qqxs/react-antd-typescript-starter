import React, { useEffect, useState, useCallback } from 'react'
// import { useHistory } from "react-router-dom";
import { Form, Input, Button, Row, Col, message } from 'antd'
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons'
import { postLogin, getCaptcha } from '@/models/auth'
import { classPrefix } from '@/constant'
import FE from '@/assets/FE.png'
import './login.scss'
import { setToken } from '@/utils/auth'

const Login = () => {
  //   const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [codeImg, setCodeImg] = useState('')
  const [captchaID, setCaptchaID] = useState('')

  useEffect(() => {
    handleCaptcha()
  }, [])

  const handleCaptcha = useCallback(() => {
    getCaptcha()
      .then(res => {
        console.log(res.data)
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        setCodeImg(`http://localhost:8080 ${res.data.data.imageUrl}`)
        setCaptchaID(res.data.data.captchaId)
      })
      .catch(error => {
        console.log(error.response)
        setLoading(false)
      })
  }, [])

  const onFinish = useCallback(
    (values: any) => {
      console.log(values)
      setLoading(true)
      values.captchaID = captchaID

      postLogin(values)
        .then(res => {
          console.log(res)
          const data = res.data
          if (data.code === 0) {
            setToken(data.data.token)
            // history.push("/");
          } else {
            void message.error(data.msg)
            setLoading(false)
            handleCaptcha()
          }
        })
        .catch(error => {
          console.log(error.response)
          setLoading(false)
        })
    },
    [captchaID, handleCaptcha]
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
                <Col span={17}>
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
                <Col span={6}>
                  <div style={{ height: '40px', backgroundColor: '#FFF' }}>
                    <img src={codeImg} alt="验证码" onClick={handleCaptcha} />
                  </div>
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

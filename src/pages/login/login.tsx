import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Row, message } from 'antd';
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import { postLogin, getCaptcha } from '@/services/auth';
import FE from '@/assets/FE.png';
import { setToken } from '@/utils/auth';

import styles from './login.module.scss';

const Login = () => {
  //   const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [codeImg, setCodeImg] = useState('');
  const [captchaID, setCaptchaID] = useState('');

  const handleCaptcha = useCallback(() => {
    getCaptcha()
      .then((res) => {
        // console.log('res.data', res.data)
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        setCodeImg(res.data.image_url);
        setCaptchaID(res.data.captcha_id);
      })
      .catch((error) => {
        logger.e(error.response);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = useCallback(
    (values: any) => {
      setLoading(true);
      values.captcha_id = captchaID;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      postLogin(values)
        .then((res) => {
          if (res.code === 0) {
            setToken(res.data);
            location.href = '/';
          } else {
            void message.error(res.msg);
            setLoading(false);
            handleCaptcha();
          }
        })
        .catch((error) => {
          logger.e(error.response);
          setLoading(false);
          handleCaptcha();
        });
    },
    [captchaID, handleCaptcha],
  );

  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <div className={styles['content-left']}>
          <img src={FE} alt="fe" className={styles.logo} />
        </div>
        <div className={styles['content-right']}>
          <h2>用户登录</h2>
          <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: '请输入邮箱!' },
                { type: 'email', message: '请输入有效邮箱!' },
              ]}
            >
              <Input prefix={<UserOutlined rev={undefined} />} placeholder="邮箱" size="large" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
              <Input.Password
                prefix={<LockOutlined rev={undefined} />}
                size="large"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item className={styles.captcha}>
              <Row justify="space-between">
                <Form.Item
                  name="code"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码!',
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="验证码"
                    prefix={<SafetyOutlined rev={undefined} />}
                  />
                </Form.Item>
                <div className={styles['code-wrapper']}>
                  {!!codeImg && <img src={codeImg} alt="验证码" onClick={handleCaptcha} />}
                </div>
              </Row>
            </Form.Item>

            <div style={{ textAlign: 'right', paddingBottom: '10px' }}>
              <Link to="/register">register</Link>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block loading={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

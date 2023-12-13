import { useEffect, useState, useCallback } from 'react';
import { Form, Button, message, Input, InputNumber } from 'antd';
import { postRegister } from '@/services/auth';
import FormRUpload, { getUploadImageList } from '@/components/Upload';

import styles from './register.module.scss';

const Register = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const onFinish = useCallback((values: any) => {
    setLoading(true);
    values.avatar = getUploadImageList(values.avatar)[0];

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    postRegister(values)
      .then((res) => {
        if (res.code === 0) {
          location.href = '/login';
        } else {
          void message.error(res.msg);
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <h2>用户注册</h2>
        <Form name="register" initialValues={{ remember: true }} onFinish={onFinish}>
          <div style={{ textAlign: 'center' }}>
            <FormRUpload name="avatar" />
          </div>
          <Form.Item name="name" rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input placeholder="用户名" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '请输入邮箱!' },
              { type: 'email', message: '请输入有效邮箱!' },
            ]}
          >
            <Input placeholder="邮箱" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password size="large" placeholder="密码" />
          </Form.Item>
          <Form.Item
            name="confirm_password"
            rules={[{ required: true, message: '请输入确认密码!' }]}
          >
            <Input.Password size="large" placeholder="确认密码" />
          </Form.Item>

          <Form.Item name="gender" rules={[{ required: true, message: '请输入gender!' }]}>
            <Input size="large" placeholder="gender" />
          </Form.Item>
          <Form.Item name="age" rules={[{ required: true, message: '请输入年龄!' }]}>
            <InputNumber size="large" placeholder="age" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;

import { FC } from 'react';

import { Button, Form, Input } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';

import { useAppDispatch } from '../../hooks/redux-hooks';

import { IAuthProps, ILoginValue } from './Auth.interface';
import './Auth.css';
import { login } from './state/AuthState';

export const AuthComponent: FC<IAuthProps> = (props) => {
 const dispatch = useAppDispatch();

 const onFinish = (values: ILoginValue) => {
  console.log('Success:', values);
  dispatch(login());
 };

 const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
 };

 return (
  <div className="layout">
   <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
   >
    <Form.Item label="Логин" name="username" rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}>
     <Input />
    </Form.Item>

    <Form.Item label="Пароль" name="password" rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}>
     <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
     <Checkbox>Запомнить меня</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
     <Button type="primary" htmlType="submit">
      Войти
     </Button>
    </Form.Item>
   </Form>
  </div>
 );
};

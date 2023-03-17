import { FC, useEffect } from 'react';

import { Button, Form, Input, message } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { authAction, login } from './state/LoginState';

import { ILoginProps, ILoginValue } from './Login.interface';
import './Login.css';

export const LoginComponent: FC<ILoginProps> = (props) => {
 const state = useAppSelector((state) => state.auth);
 const [messageApi, contextHolder] = message.useMessage();
 const key = 'updatable';

 const dispatch = useAppDispatch();

 useEffect(() => {
  if (state.isAuth) {
   setTimeout(() => {
    messageApi.open({
     key,
     type: 'success',
     content: 'Успешно!',
     duration: 2,
    });
   }, 1000);
  }
  () => {
   console.log('close');
  };
 }, [state.isAuth]);

 const onFinish = (values: ILoginValue) => {
  messageApi.open({
   key,
   type: 'loading',
   content: 'Авторизация',
  });

  dispatch(authAction({ login: values.username, password: values.password }));
 };

 const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
 };

 return (
  <div className="layout">
   {contextHolder}
   <div className="back"></div>

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

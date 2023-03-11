import { FC } from 'react';

import { Button, Form, Input, message } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';

import { useAppDispatch } from '../../hooks/redux-hooks';
import { login } from './state/LoginState';

import { ILoginProps, ILoginValue } from './Login.interface';
import './Login.css';

export const LoginComponent: FC<ILoginProps> = (props) => {
 const [messageApi, contextHolder] = message.useMessage();
 const key = 'updatable';

 const dispatch = useAppDispatch();

 const onFinish = (values: ILoginValue) => {
  messageApi.open({
   key,
   type: 'loading',
   content: 'Авторизация',
  });

  setTimeout(() => {
   Promise.resolve().then(() => {
    messageApi.open({
     key,
     type: 'success',
     content: 'Успешно!',
     duration: 2,
    });
    setTimeout(() => {
     dispatch(login());
    }, 200);
   });
  }, 1000);
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

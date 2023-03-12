import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Menu from 'antd/es/menu';
import { MenuFoldOutlined, MenuUnfoldOutlined, ExportOutlined } from '@ant-design/icons';
import { Content, Header } from 'antd/es/layout/layout';

import { getItem, MenuItem } from '../../func/GetItem';
import { IMenuItem } from '../../../InterfaceMenu/Menu.interface';
import { MyMenu } from '../../../InterfaceMenu/Menu';
import { ILayoutProps } from './AppLayout.interface';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { logout } from '../../../pages/Login/state/LoginState';

export const AppLayout: FC<ILayoutProps> = (props) => {
 const navigate = useNavigate();

 const dispatch = useAppDispatch();

 let innerWidth = window.innerHeight - 1;

 const [collapsed, setCollapsed] = useState(false);

 const menuItems: MenuItem[] = MyMenu.map(
  (x: IMenuItem): MenuItem =>
   getItem({
    key: x.key,
    label: x.label,
    icon: x.icon,
    onClick: () => navigate(x.path),
   })
 );

 return (
  <Layout style={{ minHeight: innerWidth }}>
   <Header>
    <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16, marginRight: 16 }}>
     {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
    <Button danger onClick={() => dispatch(logout())} style={{ marginBottom: 16 }}>
     {<ExportOutlined />}
    </Button>
   </Header>
   <Layout>
    <Sider width={200} collapsed={collapsed}>
     <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
      items={menuItems}
     />
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
     <Content
      style={{
       padding: 24,
       margin: 0,
       minHeight: '100%',
      }}
     >
      {props.children}
     </Content>
    </Layout>
   </Layout>
  </Layout>
 );
};

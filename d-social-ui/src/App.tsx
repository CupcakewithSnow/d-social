import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, ExportOutlined } from '@ant-design/icons';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Menu from 'antd/es/menu';

import { MyFeedComponent } from './pages/MyFedd/MyFeed.component';
import { NewsComponent } from './pages/News/News.component';
import { NotFoundComponent } from './pages/NotFound/NotFound.component';
import { getItem, MenuItem } from './shared/func/GetItem';

import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';

import './App.css';
import { IMenuItem } from './MenuInterface/Menu/Menu.interface';
import { MyMenu } from './MenuInterface/Menu/Menu';
import { MessagesComponent } from './pages/Messages/Messages.component';
import { AuthComponent } from './pages/Auth/Auth.component';
import { logout } from './pages/Auth/state/AuthState';

function App() {
 const stateAuth = useAppSelector((state) => state.auth);
 const dispatch = useAppDispatch();
 const navigate = useNavigate();

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
  <>
   {stateAuth.isAuth ? (
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
        <Routes>
         <Route path="/" element={<MyFeedComponent />} />
         <Route path="/news" element={<NewsComponent />} />
         <Route path="/messages" element={<MessagesComponent />} />

         <Route path="*" element={<NotFoundComponent />} />
        </Routes>
       </Content>
      </Layout>
     </Layout>
    </Layout>
   ) : (
    <AuthComponent />
   )}
  </>
 );
}

export default App;

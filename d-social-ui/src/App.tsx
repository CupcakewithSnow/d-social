import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Menu from "antd/es/menu";
import { MyMenu } from "./const/Menu/Menu";
import { MyNavBar } from "./const/NavBar/NavBar";
import "./App.css";
import { useState } from "react";
function App() {
  let innerWidth = window.innerHeight - 1;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: innerWidth, padding: 0, margin: 0 }}>
      <Header className="header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={MyNavBar}
          style={{ padding: 0, margin: 0 }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          trigger
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={MyMenu}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100%",
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;

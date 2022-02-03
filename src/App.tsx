import { Layout, Menu } from "antd";
import {
  Link, Outlet} from "react-router-dom";
import "./App.css";

const { Header, Footer, Content } = Layout;



function App() {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item><Link to="/reports">Reports</Link></Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default App;

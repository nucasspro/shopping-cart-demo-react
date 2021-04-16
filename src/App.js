import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import LeftSider from "./components/LeftSider";
import BodyContent from "./components/BodyContent";

const { Header, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <LeftSider />

          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />

            <BodyContent />

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default App;

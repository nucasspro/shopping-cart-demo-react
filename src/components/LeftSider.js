import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

export default function LeftSider() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="/home">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="/products">
          <Link to="/products">Products</Link>
        </Menu.Item>

        <Menu.Item key="/cart">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

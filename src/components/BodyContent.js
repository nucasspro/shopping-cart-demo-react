import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "./Home";
import Products from "./Products";
import CartDetail from "./CartDetail";

const { Content } = Layout;
export default function BodyContent() {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <CartDetail />
          </Route>
        </Switch>
      </div>
    </Content>
  );
}

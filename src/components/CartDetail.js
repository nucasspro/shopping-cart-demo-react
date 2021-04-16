import React, { useState, useEffect } from "react";
import { Table, Button, Space, InputNumber } from "antd";
import { openTheNotificationBox } from "../providers/notificationProvider";
import { postProductsByAxios } from "../providers/productProvider";
import {
  getLocalStorageByKey,
  setLocalStorageByKey,
} from "../providers/localStorageProvider";

export default function CartDetail() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => `$${text}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, product) => (
        <InputNumber
          style={{ width: 60 }}
          key={product.id}
          min={1}
          max={10}
          defaultValue={product.quantity}
          onChange={(value) => {
            onChange(value, product);
          }}
        />
      ),
    },
    {
      title: "Price x Quantity",
      dataIndex: "priceXQuantity",
      key: "priceXQuantity",
      render: (text, product) => `$${product.price * product.quantity}`,
    },
    {
      title: "Action",
      key: "action",
      render: (text, product) => (
        <Space size="middle">
          <Button danger onClick={() => deleteProduct(product)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const onChange = (value, product) => {
    const localData = [...products];
    const foundItemIndex = localData.findIndex(
      (item) => item.id === product.id
    );
    if (foundItemIndex >= 0) {
      localData[foundItemIndex].quantity = value;
      setLocalStorageByKey("cart", {
        products: [...localData],
      });
      setProducts(localData);
    }
  };

  const deleteProduct = (product) => {
    const filterResult = products.filter((item) => item.id !== product.id);
    setLocalStorageByKey("cart", {
      products: [...filterResult],
    });

    openTheNotificationBox("Deleted", `Deleted ${product.title}`, 2);
    setProducts(filterResult);
  };

  const sendProductsToCart = async () => {
    let result = await postProductsByAxios(
      "https://fakestoreapi.com/products",
      products
    );
    if (result !== null) {
      openTheNotificationBox("Submit successful", "Clear all products", 2);
      setLocalStorageByKey("cart", {
        products: [],
      });
      setProducts([]);
    }
  };

  useEffect(() => {
    let localData = getLocalStorageByKey("cart");
    if (localData) {
      setProducts(localData.products);
    }
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      const totalPrice = products.reduce(
        (total, current) => total + current.quantity * current.price,
        0
      );

      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [products]);

  return (
    <div>
      <Table
        title={() => "Cart list"}
        dataSource={products}
        columns={columns}
      />
      <p>Total price: ${totalPrice}</p>
      <Button onClick={sendProductsToCart}>Submit</Button>
    </div>
  );
}

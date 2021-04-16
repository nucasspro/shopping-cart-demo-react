import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProductsByAxios } from "../providers/productProvider";
import { List } from "antd";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const result = await getProductsByAxios(
        "https://fakestoreapi.com/products"
      );
      if (result) {
        // result.then((item) => setProducts(item));
        console.log(result);
      }
    }
    getProducts();
  }, []);

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={products}
      renderItem={(product) => (
        <List.Item>
          <ProductCard
            key={product.key}
            product={product}
            setProducts={setProducts}
          />
        </List.Item>
      )}
    />
  );
}

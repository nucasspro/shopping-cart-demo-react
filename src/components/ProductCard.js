import React from "react";
import { Card, Button, Image } from "antd";
import { openTheNotificationBox } from "../providers/notificationProvider";
import {
  getLocalStorageByKey,
  setLocalStorageByKey,
} from "../providers/localStorageProvider";

export default function ProductCard(props) {
  const { product } = props;
  const { Meta } = Card;

  const addSingleItem = (product) => {
    let localData = getLocalStorageByKey("cart");
    if (localData === null) {
      localData = {
        products: [
          {
            key: product.id,
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
          },
        ],
      };
    } else {
      const foundItemIndex = localData.products.findIndex(
        (x) => x.id === product.id
      );
      if (foundItemIndex >= 0) {
        localData.products[foundItemIndex].quantity =
          localData.products[foundItemIndex].quantity + 1;
      } else {
        localData.products.push({
          key: product.id,
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        });
      }
    }
    setLocalStorageByKey("cart", localData);
    openTheNotificationBox("Added successful", `Added ${product.title}`, 2);
  };

  return (
    <Card
      hoverable
      style={{ width: 240, height: 500 }}
      cover={
        <Image
          width={200}
          height={250}
          alt={product.title}
          src={product.image}
        />
      }
    >
      <Meta
        title={product.price}
        description={product.title}
        style={{ height: 150 }}
      />
      <Button
        style={{ width: 150, margin: 15 }}
        onClick={() => {
          addSingleItem(product);
        }}
      >
        Add to cart
      </Button>
    </Card>
  );
}

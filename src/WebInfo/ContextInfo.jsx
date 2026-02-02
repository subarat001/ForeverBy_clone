import React, { createContext, useState } from "react";

export const commoncontext = createContext();

export default function ContextInfo({ children }) {
  // finnal cart product
  const [cartproduct, setcardproduct] = useState([]);

  // add to cart paroct logic section
  const addToCart = (product) => {
    setcardproduct((prev) => {
      const existingItem = prev.find((item) => product.id === item.id);
      if (existingItem) {
        return cartproduct.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...cartproduct, { ...product, quantity: 1 }];
      }
    });
  };

  // count price
  let totalPrice = cartproduct.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  // remove from count
  const removeFromCart = (product) => {
    setcardproduct((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id),
    );
  };

  //product quantity increase
  // const incprod = (prod) => {
  //   setcardproduct((itm) => {
  //     const exist = itm.find((prod) => prod.id === itm.id);
  //     if (exist) {
  //       return itm.quantity += 1;
  //     }
  //   });
  // };

  return (
    <>
      <commoncontext.Provider
        value={{ cartproduct, addToCart, totalPrice, removeFromCart }}
      >
        {children}
      </commoncontext.Provider>
      ;
    </>
  );
}

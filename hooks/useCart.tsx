"use client";

import { getCartItems } from "@/actions/cart/getCartItems";
import { useEffect, useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState<number | `${number}`>(0);

  // Initial Cart Item Loading
  useEffect(() => {
    try {
      const handleCartItem = async () => {
        const items = await getCartItems();
        setCartItems((prev) => {
          const currentItems = items?.length;
          if (currentItems) return currentItems;
          else return prev;
        });
      };
      handleCartItem();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Add an Item to Cart

  const addNewItemToCart = () => {
    setCartItems((prevItems) => {
      return Number(prevItems) + 1;
    });
  };

  // Remove an Item from Cart
  const removeAnItemFromCart = () => {
    setCartItems((prevItems) => {
      return Number(prevItems) - 1 >= 0 ? Number(prevItems) - 1 : 0;
    });
  };

  return { cartItems, setCartItems, addNewItemToCart, removeAnItemFromCart };
}

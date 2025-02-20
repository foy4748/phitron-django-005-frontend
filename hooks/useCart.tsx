"use client";

import { getCartItems } from "@/actions/cart/getCartItems";
import { TCartItem } from "@/types/cart";
import { useEffect, useState } from "react";

export default function useCart() {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  // Initial Cart Item Loading
  useEffect(() => {
    try {
      const handleCartItem = async () => {
        const items = await getCartItems();
        setCartItems(items || []);
      };
      handleCartItem();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Add an Item to Cart

  const addNewItemToCart = (item: TCartItem) => {
    setCartItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  // Remove an Item from Cart
  const removeAnItemFromCart = (id: number | `${number}`) => {
    setCartItems((prevItems) => {
      const filteredItems = prevItems.filter((item) => item.id != id);
      return filteredItems;
    });
  };

  return { cartItems, setCartItems, addNewItemToCart, removeAnItemFromCart };
}

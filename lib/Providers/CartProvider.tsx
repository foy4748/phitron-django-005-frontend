"use client";
import useCart from "@/hooks/useCart";
import { createContext } from "react";

export const CartContext = createContext({});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const props = useCart();
  return (
    <>
      <CartContext.Provider value={props}>{children}</CartContext.Provider>
    </>
  );
}

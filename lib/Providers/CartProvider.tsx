"use client";
import useCart from "@/hooks/useCart";
import { TCartContext } from "@/types/providers/cartProvider";
import { createContext } from "react";

export const CartContext = createContext<TCartContext>({} as TCartContext);

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

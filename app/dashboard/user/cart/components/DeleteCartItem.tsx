"use client";
import { deleteCartItem } from "@/actions/cart/deleteCartItem";
import { CartContext } from "@/lib/Providers/CartProvider";
import { cn } from "@/lib/utils";
import { CircleX } from "lucide-react";
import { useContext } from "react";
export function DeleteCartItem({
  id,
  className,
}: {
  id: number | `${number}`;
  className?: string;
}) {
  const { removeAnItemFromCart } = useContext(CartContext);
  const handleDeleteCartItem = async (id: number | `${number}`) => {
    try {
      const isDeleteOK = await deleteCartItem(id);
      if (isDeleteOK) removeAnItemFromCart();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CircleX
        className={cn("cursor-pointer", className)}
        onClick={() => handleDeleteCartItem(id)}
      />
    </>
  );
}

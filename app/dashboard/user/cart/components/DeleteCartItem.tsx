"use client";
import { deleteCartItem } from "@/actions/cart/deleteCartItem";
import { toast } from "@/hooks/use-toast";
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
      toast({ title: "Deleteting ..." });
      const isDeleteOK = await deleteCartItem(id);
      if (isDeleteOK) removeAnItemFromCart();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CircleX
        className={cn(
          "cursor-pointer bg-red-400 hover:bg-red-500 rounded-full text-white",
          className
        )}
        onClick={() => handleDeleteCartItem(id)}
      />
    </>
  );
}

"use client";
import { deleteCartItem } from "@/actions/cart/deleteCartItem";
import { cn } from "@/lib/utils";
import { CircleX } from "lucide-react";
export function DeleteCartItem({
  id,
  className,
}: {
  id: number | `${number}`;
  className?: string;
}) {
  const handleDeleteCartItem = async (id: number | `${number}`) => {
    await deleteCartItem(id);
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

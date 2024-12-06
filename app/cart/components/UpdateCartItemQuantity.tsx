"use client";
import { updateCartQuantity } from "@/actions/cart/updateCartItem";
import { Button } from "@/components/ui/button";
import { TCartItem } from "@/types/cart";
import { useState } from "react";

const UpdateCartItemQuantity = ({ cartItem }: { cartItem: TCartItem }) => {
  const [quantity, setQuantity] = useState(Number(cartItem.quantity));
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleUpdateCartItemQuantity = async () => {
    const payload = {
      ...cartItem,
      quantity,
    };
    const res = await updateCartQuantity(payload);
    console.log(res);
  };
  return (
    <>
      <div className="space-y-8">
        <div className="flex items-center gap-4 justify-between">
          <Button onClick={decrement} size={"sm"}>
            -
          </Button>
          <span>{quantity}</span>
          <Button onClick={increment} size={"sm"}>
            +
          </Button>
        </div>
        <Button onClick={handleUpdateCartItemQuantity} className="w-full">
          Update Quanitity
        </Button>
      </div>
    </>
  );
};

export default UpdateCartItemQuantity;

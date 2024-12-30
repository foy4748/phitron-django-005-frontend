"use client";
import { updateCartQuantity } from "@/actions/cart/updateCartItem";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { TCartItem } from "@/types/cart";
import { useState } from "react";

const UpdateCartItemQuantity = ({ cartItem }: { cartItem: TCartItem }) => {
  const [quantity, setQuantity] = useState(Number(cartItem.quantity));
  const [isValueChanged, setIsValueChanged] = useState<boolean>(false);
  const increment = () => {
    setQuantity(quantity + 1);
    setIsValueChanged(true);
  };
  const decrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
    setIsValueChanged(true);
  };

  const handleUpdateCartItemQuantity = async () => {
    const payload = {
      ...cartItem,
      quantity,
    };
    try {
      const res = await updateCartQuantity(payload);
      console.log(res);
      setIsValueChanged(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to cart item quantity",
      });
    }
  };
  return (
    <>
      <div className="space-y-8">
        <div className="flex items-center gap-4 justify-between">
          <Button onClick={decrement} size={"sm"}>
            -
          </Button>
          <span className={cn({ "text-red-500": isValueChanged })}>
            {quantity}
          </span>
          <Button onClick={increment} size={"sm"}>
            +
          </Button>
        </div>
        {isValueChanged && (
          <Button onClick={handleUpdateCartItemQuantity} className="w-full">
            Update Quanitity
          </Button>
        )}
      </div>
    </>
  );
};

export default UpdateCartItemQuantity;

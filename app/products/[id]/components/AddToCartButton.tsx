"use client";
import { addToCart } from "@/actions/cart/addToCart";
import { Button } from "@/components/ui/button";
import { TAddToCartPayload } from "@/types/cart";
import { useSession } from "next-auth/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const AddToCartButton = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = async () => {
    // Checking if user is logged in
    if (!session?.user) {
      router.push(`/login?callbackUrl=${pathname}`);
      return;
    }
    // =======
    const payload: TAddToCartPayload = {
      quantity,
      product: Number(params.id),
    };
    const res = await addToCart(payload);
    console.log(res);
  };
  return (
    <>
      <div className="flex items-center gap-4">
        <Button onClick={decrement} size={"sm"}>
          -
        </Button>
        <span>{quantity}</span>
        <Button onClick={increment} size={"sm"}>
          +
        </Button>
      </div>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </>
  );
};

export default AddToCartButton;

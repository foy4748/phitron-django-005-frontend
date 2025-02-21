"use client";
import { addToCart } from "@/actions/cart/addToCart";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CartContext } from "@/lib/Providers/CartProvider";
import { TAddToCartPayload } from "@/types/cart";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";

const AddToCartButton = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [quantity, setQuantity] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const { addNewItemToCart } = useContext(CartContext);

  const handleAddToCart = async () => {
    toast({
      title: "Adding item to cart....",
    });
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
    try {
      const res = await addToCart(payload);
      if (res) {
        toast({
          title: "Added Product to cart",
        });
        addNewItemToCart();
        setIsHidden(true);
      } else {
        toast({
          title: "Already added",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "FAILED to add Product to cart",
      });
    }
    // console.log(res);
  };
  if (!isHidden)
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
  return (
    <>
      <Link href={"/dashboard/user/cart"}>
        <Button>Go To Cart</Button>
      </Link>
    </>
  );
};

export default AddToCartButton;

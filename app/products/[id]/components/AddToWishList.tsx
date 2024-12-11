"use client";
import { addToWishList } from "@/actions/wishList/addToWishList";
import { Button } from "@/components/ui/button";
import { TAddToWishListPayload } from "@/types/wishList";
import { HeartIcon } from "lucide-react";

export default function AddToWishList({ product }: TAddToWishListPayload) {
  const handleAddToWishList = async () => {
    try {
      await addToWishList({ product });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={handleAddToWishList}>
        <HeartIcon />
      </Button>
    </>
  );
}

"use client";
import { deleteWishListItem } from "@/actions/wishList/deleteWishListItem";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function RemoveWishListButton({
  wishlist_id,
}: {
  wishlist_id: number | `${number}`;
}) {
  const handleRemoveWishList = async () => {
    toast({
      title: "Removing the item",
    });
    const res = await deleteWishListItem(wishlist_id);
    if (res) {
      toast({
        title: "Removed Wish List Item",
      });
    } else {
      toast({
        title: "Failed to Remove",
      });
    }
  };
  return (
    <>
      <Button onClick={handleRemoveWishList}>Remove</Button>
    </>
  );
}

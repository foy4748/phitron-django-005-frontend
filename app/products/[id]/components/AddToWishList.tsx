"use client";
import { addToWishList } from "@/actions/wishList/addToWishList";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { TAddToWishListPayload } from "@/types/wishList";
import { HeartIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function AddToWishList({ product }: TAddToWishListPayload) {
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const handleAddToWishList = async () => {
    toast({
      title: "Adding product to Wishlist",
    });
    // Checking if user is logged in
    if (!session?.user) {
      router.push(`/login?callbackUrl=${pathname}`);
      return;
    }
    // =======
    try {
      const res = await addToWishList({ product });
      if (res) {
        toast({
          title: "Successfully added to Wishlist",
        });
        setIsHidden(true);
      } else {
        toast({
          title: "FAILED to add prodcut to Wishlist",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "FAILED to add prodcut to Wishlist",
      });
    }
  };
  if (!isHidden)
    return (
      <>
        <Button onClick={handleAddToWishList}>
          <HeartIcon />
        </Button>
      </>
    );
  else {
    return (
      <>
        <Link href={"/dashboard/user/wish-list"}>
          <Button>Go To Wish List</Button>
        </Link>
      </>
    );
  }
}

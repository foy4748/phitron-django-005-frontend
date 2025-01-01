"use client";
import { addToWishList } from "@/actions/wishList/addToWishList";
import { Button } from "@/components/ui/button";
import { TAddToWishListPayload } from "@/types/wishList";
import { HeartIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function AddToWishList({ product }: TAddToWishListPayload) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const handleAddToWishList = async () => {
    // Checking if user is logged in
    if (!session?.user) {
      router.push(`/login?callbackUrl=${pathname}`);
      return;
    }
    // =======
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

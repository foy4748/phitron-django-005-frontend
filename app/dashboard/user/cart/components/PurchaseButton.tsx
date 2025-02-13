"use client";

import { purchaseCartItem } from "@/actions/cart/purchaseCartItem";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";

export const handlePurchase = async () => {
  const res = await purchaseCartItem();
  console.log("TEST", res);
  permanentRedirect(res.GatewayPageURL);
  // const { success } = res;
  // if (success) {
  //   toast({
  //     title: "Purchased item(s) Successfully",
  //   });
  // } else {
  //   toast({
  //     title: String(res.message),
  //   });
  // }
};

export function PurchaseButton({ className }: { className?: string }) {
  return (
    <>
      <Button type="submit" className={cn(className)} onClick={handlePurchase}>
        Purchase Items
      </Button>
    </>
  );
}

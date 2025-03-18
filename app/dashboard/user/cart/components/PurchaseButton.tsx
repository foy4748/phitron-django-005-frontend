"use client";

import { purchaseCartItem } from "@/actions/cart/purchaseCartItem";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";

export const handlePurchase = async () => {
  const res = await purchaseCartItem();
  console.log("TEST", res);
  if (res.GatewayPageURL) {
    permanentRedirect(res.GatewayPageURL);
  } else {
    toast({ title: "Payment Initialization Failed", variant: "destructive" });
  }
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

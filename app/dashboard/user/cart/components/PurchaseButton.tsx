"use client";

import { purchaseCartItem } from "@/actions/cart/purchaseCartItem";
import { Button } from "@/components/ui/button";
// import { toast } from "@/hooks/use-toast";
import { permanentRedirect } from "next/navigation";

export function PurchaseButton() {
  const handlePurchase = async () => {
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
  return (
    <>
      <Button onClick={handlePurchase}>Purchase Items</Button>
    </>
  );
}

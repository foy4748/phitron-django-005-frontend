"use client";

import { purchaseCartItem } from "@/actions/cart/purchaseCartItem";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export function PurchaseButton() {
  const handlePurchase = async () => {
    const res = await purchaseCartItem();
    const { success } = res;
    if (success) {
      toast({
        title: "Purchased item(s) Successfully",
      });
    } else {
      toast({
        title: String(res.message),
      });
    }
  };
  return (
    <>
      <Button onClick={handlePurchase}>Purchase Items</Button>
    </>
  );
}

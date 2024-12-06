"use client";

import { purchaseCartItem } from "@/actions/cart/purchaseCartItem";
import { Button } from "@/components/ui/button";

export function PurchaseButton() {
  return (
    <>
      <Button onClick={purchaseCartItem}>Purchase Items</Button>
    </>
  );
}

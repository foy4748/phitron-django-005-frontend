"use client";

import { toast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Notification() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Payment Failure
    const isPaymentFailed = searchParams.get("payment-failed");
    if (isPaymentFailed)
      toast({ title: "Payment Failed", variant: "destructive" });
    // Payment Successful
    const isPaymentSucceed = searchParams.get("payment-succeed");
    if (isPaymentSucceed)
      toast({ title: "Payment Successful", variant: "success" });
  }, [searchParams]);
  return <></>;
}

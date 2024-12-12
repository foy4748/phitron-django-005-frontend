import { TpurchaseProduct } from "@/types/purchaseHistory";
import { cookies } from "next/headers";

//  Purchase History Fetch Func
export const getPurchaseHistory = async () => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const ck = await cookies();
  const res = await fetch(`${S}/purchase/list/`, {
    credentials: "include",
    method: "GET",
    headers: {
      Authorization: `Token ${ck.get("token")?.value}`,
      "Content-Type": "application/json",
    },
  });
  const data: TpurchaseProduct[] = await res.json();

  return data;
};

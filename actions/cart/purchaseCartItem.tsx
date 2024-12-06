"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const purchaseCartItem = async () => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/purchase/`, {
      credentials: "include",
      method: "POST",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    revalidateTag("cartItems");
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed Purchase Items" };
  }
};

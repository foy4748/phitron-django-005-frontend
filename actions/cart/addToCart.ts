"use server";

import { TAddToCartPayload } from "@/types/cart";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addToCart = async (payload: TAddToCartPayload) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/cart/cart-item-create/`, {
      credentials: "include",
      method: "POST",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (res.status == 201) {
      const data = await res.json();
      revalidateTag("cartItems");
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

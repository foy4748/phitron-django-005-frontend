"use server";

import { TCartItem } from "@/types/cart";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const updateCartQuantity = async (payload: TCartItem) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/cart/cart-item-update/${payload.id}/`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: payload.quantity }),
    });
    revalidateTag("cartItems");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to update quantity of cart item",
    };
  }
};

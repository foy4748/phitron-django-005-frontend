"use server";

import { cookies } from "next/headers";

export const deleteCartItem = async (id: number | `${number}`) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/cart/cart-item-delete/${id}/`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Failed to delete cart item",
    };
  }
};

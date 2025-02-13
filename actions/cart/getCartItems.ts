"use server";
import { cookies } from "next/headers";
export const getCartItems = async () => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const ck = await cookies();
  const res = await fetch(`${S}/cart/cart-item-list/`, {
    credentials: "include",
    method: "GET",
    headers: {
      Authorization: `Token ${ck.get("token")?.value}`,
      "Content-Type": "application/json",
    },
    next: {
      tags: ["cartItems"],
    },
  });
  const data = await res.json();
  return data;
};

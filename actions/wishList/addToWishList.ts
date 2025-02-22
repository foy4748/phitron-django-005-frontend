"use server";

import { TAddToWishListPayload } from "@/types/wishList";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addToWishList = async (payload: TAddToWishListPayload) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/wish-list/create/`, {
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
      revalidateTag("wishListItems");
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

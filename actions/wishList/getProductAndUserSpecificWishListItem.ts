"use server";
import { TWishListItem } from "@/types/wishList";
import { cookies } from "next/headers";

//  WishList Fetch Func
export const getProductAndUserSpecificWishListItem = async (
  product_id: number | `${number}`
) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const ck = await cookies();
  const res = await fetch(`${S}/wish-list/detail/${product_id}/`, {
    credentials: "include",
    method: "GET",
    headers: {
      Authorization: `Token ${ck.get("token")?.value}`,
      "Content-Type": "application/json",
    },
    next: {
      tags: [
        "single-wish-list-item",
        `product-specific-wishlist-${product_id}`,
      ],
    },
  });
  if (res.ok) {
    const data: TWishListItem = await res.json();
    return data;
  } else {
    return null;
  }
};

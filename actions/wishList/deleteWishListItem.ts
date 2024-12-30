"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

//  WishList Fetch Func
export const deleteWishListItem = async (
  wishlist_item_id: number | `${number}`
) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const ck = await cookies();
  const res = await fetch(`${S}/wish-list/delete/${wishlist_item_id}/`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      Authorization: `Token ${ck.get("token")?.value}`,
      "Content-Type": "application/json",
    },
  });
  if (res.status == 204) {
    revalidateTag("single-wish-list-item");
    revalidateTag("wishlist-items");
    return true;
  } else {
    return null;
  }
};

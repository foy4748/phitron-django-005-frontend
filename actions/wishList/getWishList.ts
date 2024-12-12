import { TWishListItem } from "@/types/wishList";
import { cookies } from "next/headers";

//  WishList Fetch Func
export const getWishList = async () => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const ck = await cookies();
  const res = await fetch(`${S}/wish-list/list/`, {
    credentials: "include",
    method: "GET",
    headers: {
      Authorization: `Token ${ck.get("token")?.value}`,
      "Content-Type": "application/json",
    },
  });
  const data: TWishListItem[] = await res.json();

  return data;
};

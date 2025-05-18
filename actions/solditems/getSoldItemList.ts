"use server";
import { cookies } from "next/headers";
export const getSoldItemList = async () => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const url = `${S}/purchase/order-list/`;
    const tags = ["sold_item_list"];
    const res = await fetch(url, {
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,

        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: {
        tags,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

"use server";
import { cookies } from "next/headers";
export const getProductList = async (
  queryStr?: string,
  isAdminOnly?: boolean,
  isUserOnly?: boolean
) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const url = isAdminOnly
      ? `${S}/admin-specific/product-list`
      : isUserOnly
      ? `${S}/user-specific/product-list`
      : `${S}/product-list`;
    const params = new URLSearchParams(queryStr);
    const paramsObject = Object.fromEntries(params.entries());
    const tags = ["product_list"];
    for (const key in paramsObject) {
      tags.push(`product_${key}_${paramsObject[key]}`);
    }
    // Very Useful
    // https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object
    const fetchUrl = `${url}/${queryStr ? `?${queryStr}` : ""}`;
    console.log("GET PRODCUT ACTION", fetchUrl);
    const res = await fetch(fetchUrl, {
      headers: {
        ...((isAdminOnly || isUserOnly) && {
          Authorization: `Token ${ck.get("token")?.value}`,
        }),
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

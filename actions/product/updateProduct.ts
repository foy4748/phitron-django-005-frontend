"use server";

import { TProductPayload } from "@/types/product";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const updateProduct = async (
  payload: TProductPayload,
  id: number | `${number}`
) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/product-update/${id}/`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    revalidateTag(`single-product-${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Update Product" };
  }
};

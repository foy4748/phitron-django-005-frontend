"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteProduct = async (id: number | `${number}`) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    await fetch(`${S}/product-delete/${id}/`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
    });
    revalidateTag(`single-product-${id}`);
    return true;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Delete Product" };
  }
};

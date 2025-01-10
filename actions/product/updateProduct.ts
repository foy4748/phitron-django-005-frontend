"use server";

import { TProductPayload } from "@/types/product";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const updateProduct = async (
  payload: TProductPayload,
  id: number | `${number}`,
  isAdminOnly?: boolean
) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const url = isAdminOnly
      ? `${S}/admin-specific/product-update/${id}/`
      : `${S}/product-update/${id}/`;
    const res = await fetch(url, {
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
    revalidatePath("/products");
    revalidatePath("/dashboard/user/product-list");
    revalidatePath("/dashboard/admin/product-list");
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Update Product" };
  }
};

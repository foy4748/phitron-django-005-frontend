"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteProduct = async (
  id: number | `${number}`,
  isAdminOnly?: boolean
) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const url = isAdminOnly
      ? `${S}/admin-specific/product-delete/${id}/`
      : `${S}/product-delete/${id}/`;
    await fetch(url, {
      credentials: "include",
      method: "DELETE",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
    });
    revalidateTag(`single-product-${id}`);
    revalidatePath("/products");
    revalidatePath("/dashboard/user/product-list");
    revalidatePath("/dashboard/admin/product-list");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Delete Product" };
  }
};

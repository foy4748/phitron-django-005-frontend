"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteReview = async (id: number | `${number}`) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/review/review-delete/${id}/`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
    });
    revalidateTag("review-list");
    revalidateTag(`single-review-${id}`);
    return {
      status: res.status,
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Delete review" };
  }
};

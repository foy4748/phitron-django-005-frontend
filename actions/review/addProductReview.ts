"use server";

import { TProductReviewPayload } from "@/types/review";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addProductReview = async (payload: TProductReviewPayload) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/review/review-create/`, {
      credentials: "include",
      method: "POST",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("product-user-review-list");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
};

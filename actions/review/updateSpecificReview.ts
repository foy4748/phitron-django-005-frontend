"use server";

import { TProductReviewUpdatePayload } from "@/types/review";
import { cookies } from "next/headers";

export const updateSpecificReview = async (
  payload: TProductReviewUpdatePayload,
  id: number | `${number}`
) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/review/review-update/${id}/`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Update Review" };
  }
};

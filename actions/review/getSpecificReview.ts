"use server";

import { cookies } from "next/headers";

export const getSpecifcReview = async (id: number | `${number}`) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/review/review-detail/${id}`, {
      credentials: "include",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      next: {
        tags: [`single-review-${id}`],
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Fetch Review" };
  }
};

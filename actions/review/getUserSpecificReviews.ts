"use server";

import { cookies } from "next/headers";

export const getUserSpecifcReviews = async () => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/review/review-list/`, {
      credentials: "include",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      next: {
        tags: ["review-list"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Fetch Reviews" };
  }
};

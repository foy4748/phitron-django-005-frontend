"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const depositeCurrency = async (payload: {
  amount: number | `${number}`;
}) => {
  try {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${S}/auth/deposite/`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("balance");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to Deposite Currency" };
  }
};

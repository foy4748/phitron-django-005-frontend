"use server";

import { TUserPasswordChangePayload } from "@/types/auth/changePassword";
import { cookies } from "next/headers";

export const changePassword = async (data: TUserPasswordChangePayload) => {
  try {
    const SERVER_ADDRESS =
      process.env.SERVER_ADDRESS || process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${SERVER_ADDRESS}/auth/change-password/`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const d = await res.json();
    console.log(d);
    return d;
  } catch (error) {
    console.log(error);
    return null;
  }
};

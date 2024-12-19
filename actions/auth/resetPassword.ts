"use server";

import { TResetPasswordPayload } from "@/types/auth/resetPassword";

export const resetPassword = async (data: TResetPasswordPayload) => {
  try {
    const SERVER_ADDRESS =
      process.env.SERVER_ADDRESS || process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const res = await fetch(`${SERVER_ADDRESS}/auth/reset-password/`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const d = await res.json();
    return d;
  } catch (error) {
    console.log(error);
    return null;
  }
};

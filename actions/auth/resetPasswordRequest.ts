"use server";

import { TResetPasswordRequest } from "@/types/auth/resetPassword";

export const resetPasswordRequest = async (data: TResetPasswordRequest) => {
  try {
    const SERVER_ADDRESS =
      process.env.SERVER_ADDRESS || process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const res = await fetch(`${SERVER_ADDRESS}/auth/reset-password/`, {
      method: "POST",
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

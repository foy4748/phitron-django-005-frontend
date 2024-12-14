"use server";
import { TUserRegisterPayload } from "@/types/auth/register";
import { cookies } from "next/headers";

export const registerUser = async (data: TUserRegisterPayload) => {
  try {
    const SERVER_ADDRESS =
      process.env.SERVER_ADDRESS || process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const res = await fetch(`${SERVER_ADDRESS}/auth/register/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const d = await res.json();
    console.log(d);
    if (d.status == 201) {
      const ck = await cookies();
      ck.set("token", String(d.token), {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 3600 * 1000,
      });
      return d;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

"use server";
import { cookies } from "next/headers";

export const logout = async () => {
  try {
    const SERVER_ADDRESS =
      process.env.SERVER_ADDRESS || process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const ck = await cookies();
    const res = await fetch(`${SERVER_ADDRESS}/auth/logout/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (res.status == 200) {
      ck.delete("token");
      return true;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

"use server";

import { cookies } from "next/headers";

// import { hitProtectedRoute } from "./hitProtectedRoute";

type TData = {
  username: string;
  password: string;
};

export const loginUser = async (data: TData) => {
  const SERVER_ADDRESS =
    process.env.SERVER_ADDRESS || process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(`${SERVER_ADDRESS}/auth/login/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const d = await res.json();
  const ck = await cookies();
  // const hd = await headers();
  console.log("COOKIE", ck.toString());
  console.log("loginUser Action\n", d);
  ck.set("token", String(d.token), {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 3600 * 1000,
  });
  // hd.set("Authorization", `Token ${String(d.token)}`);
  // await hitProtectedRoute();
  return d;
};

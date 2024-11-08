"use server";
import { cookies, headers } from "next/headers";

const SERVER_ADDRESS = process.env.SERVER_ADDRESS;
export const hitProtectedRoute = async () => {
  const ck = await cookies();
  const hd = await headers();

  try {
    const res = await fetch(`${SERVER_ADDRESS}/auth`, {
      credentials: "include",
      headers: {
        // ...headersObj
        // Cookie: ck.toString(),
        Authorization: `Token ${ck.get("token")?.value}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("TOKEN, hitting protected route", ck.get("token"));
    console.log("HEADERS, hitting protected route", hd.toString());
    console.log(data.message);
    return data;
  } catch (error: any) {
    console.log("FROM PROTECTED ROUTE", error.message);
  }
};

// Without this, it also works
// Convert headers to an object
// const headersObj: {
//   [key: string]: string;
// } = {};
// hd.forEach((value, key) => {
//   if (key != "content-length") headersObj[key] = value;
// });
// console.log("FROM HITPROTECTED ROUTE\n", headersObj);

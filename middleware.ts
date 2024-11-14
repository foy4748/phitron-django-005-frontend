import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const ck = await cookies();

  const token = ck.get("token"); // Replace with your logic to get the token
  console.log("FROM MW", token);

  // Clone the request headers and add the Authorization header
  const headers = new Headers(request.headers);
  headers.set("Authorization", `Token ${token}`);

  // Create a new request with the updated headers
  const modifiedRequest = new Request(request.url, {
    headers,
    method: request.method,
    body: request.body,
    redirect: request.redirect,
  });

  return NextResponse.next({
    request: modifiedRequest,
  });
}

export const config = {
  matcher: "/api/:path*", // Adjust the matcher to target your API routes
};

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export default async function midddleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production" ? true : false,
  });

  // Logics
  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");
  const isAdminRelatedRoute =
    req.nextUrl.pathname.startsWith("/dashboard/admin");
  const isAdmin = token?.isAdmin;

  // // Checking Session Expire
  const expire_login = new Date(String(token?.expire_login));
  const now = new Date();
  if (now > expire_login)
    return NextResponse.rewrite(new URL("/login", req.url));

  if (isAdminRelatedRoute && !isAdmin) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  if (isDashboard && !token) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  return NextResponse.next();
}

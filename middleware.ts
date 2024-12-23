import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export default async function midddleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");
  const isAdminRelatedRoute =
    req.nextUrl.pathname.startsWith("/dashboard/admin");
  const isAdmin = token?.isAdmin;

  if (isAdminRelatedRoute && !isAdmin) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  if (isDashboard && !token) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  return NextResponse.next();
}

// types/next-auth.d.ts
/* eslint @typescript-eslint/no-unused-vars : off */
import NextAuth from "next-auth";
import JWT from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    user_id: string;
    image_url: string;
    first_name: string;
    last_name: string;
    phone_no: string;
    email: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user_id: string;
    image_url: string;
    first_name: string;
    last_name: string;
    phone_no: string;
    email: string;
  }
}

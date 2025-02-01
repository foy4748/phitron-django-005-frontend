// types/next-auth.d.ts
/* eslint @typescript-eslint/no-unused-vars : off */
import NextAuth from "next-auth";
import JWT from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    user_id: string;
    username: string;
    image_url: string | null | undefined;
    first_name: string | null | undefined;
    last_name: string | null | undefined;
    phone_no: string | null | undefined;
    email: string;
    isAdmin: boolean;
    expire_login: string | number | Date;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user_id: string;
    username: string;
    image_url: string;
    first_name: string;
    last_name: string;
    phone_no: string;
    email: string;
    isAdmin: boolean;
    expire_login: string | number | Date;
  }
}

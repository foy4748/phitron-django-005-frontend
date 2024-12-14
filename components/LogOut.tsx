"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { logout } from "@/actions/auth/logout";

export default function LogOut() {
  const handleLogout = async () => {
    try {
      signOut({ callbackUrl: "/" });
      await logout();
    } catch (error) {
      console.log("Failed to LogOut");
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={handleLogout}>LogOut</Button>
    </>
  );
}

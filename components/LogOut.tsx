"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { logout } from "@/actions/auth/logout";
import { toast } from "@/hooks/use-toast";

export const handleLogout = async () => {
  try {
    signOut({ callbackUrl: "/" });
    await logout();
    toast({
      title: "Logged out successfully",
    });
  } catch (error) {
    console.log("Failed to LogOut");
    console.log(error);
  }
};
export default function LogOut() {
  return (
    <>
      <Button onClick={handleLogout}>LogOut</Button>
    </>
  );
}

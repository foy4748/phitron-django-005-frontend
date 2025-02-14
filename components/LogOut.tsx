"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { logout } from "@/actions/auth/logout";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

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
export default function LogOut({
  className,
  variant,
}: {
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}) {
  return (
    <>
      <Button
        size={"sm"}
        variant={variant}
        className={cn(`${className}`)}
        onClick={handleLogout}
      >
        LogOut
      </Button>
    </>
  );
}

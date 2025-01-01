"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Sprout } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LogOut from "../LogOut";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isActive = (route: string) =>
    pathname.startsWith(route) ? "text-primary" : "";
  return (
    <Card className="bg-card py-3 px-4 border-0 flex items-center justify-between md:grid grid-cols-3 gap-6 rounded-2xl mt-5 w-full">
      {/* ICON */}
      <figure className="flex justify-start">
        <Link href="/">
          <Sprout className={pathname == "/" ? "text-primary" : "opacity-0"} />
        </Link>
      </figure>
      <ul className="hidden md:flex justify-center items-center gap-10 text-card-foreground">
        <li className={`font-medium ${pathname == "/" ? "text-primary" : ""}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={isActive("/products")}>
          <Link href="/products">Products</Link>
        </li>
        {session?.user && (
          <li className={isActive("/dashboard")}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        )}
      </ul>

      <div className="flex items-center justify-end">
        {session?.user ? (
          <>
            <a href="#">
              <LogOut variant="secondary" className="hidden md:block px-2" />
            </a>
            <Link href="/dashboard">
              <Button className="hidden md:block ml-2 mr-2">Dashboard</Button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/register">
              <Button variant="secondary" className="hidden md:block px-2">
                Register
              </Button>
            </Link>
            <Link href="/login">
              <Button className="hidden md:block ml-2 mr-2">Login</Button>
            </Link>
          </>
        )}

        <div className="flex md:hidden mr-2 items-center justify-end gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products">Products</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/register">
                  <Button variant="secondary" className="w-full text-sm">
                    Register
                  </Button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login">
                  <Button className="w-full text-sm">Login</Button>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Theme Toggle */}
      </div>
    </Card>
  );
};

export default Navbar;

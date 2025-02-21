"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ShoppingCart, Sprout } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import LogOut from "../LogOut";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { CartContext } from "@/lib/Providers/CartProvider";
import { Badge } from "../ui/badge";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { cartItems } = useContext(CartContext);
  const isActive = (route: string) =>
    pathname.startsWith(route) ? "text-primary" : "";
  // If Token expires, hit logout from frontEnd as well.
  useEffect(() => {
    const token = session?.user;
    const isLoginExpired =
      (token?.expire_login && isNaN(new Date(token.expire_login).getTime())) ||
      new Date() > new Date(String(token?.expire_login));

    if (isLoginExpired) {
      signOut().then(() => {
        console.log("Logged Out");
      });
    }
  }, [session?.user]);
  return (
    <Card className="bg-card py-3 px-4 border-0 flex items-center justify-between lg:justify-around lg:grid grid-cols-6 gap-6 rounded-2xl w-full">
      {/* ICON */}
      <figure className="flex justify-start">
        <Link href="/">
          <Sprout
            className={
              !pathname.startsWith("/dashboard") ? "text-primary" : "opacity-0"
            }
          />
        </Link>
      </figure>
      <ul className="hidden lg:flex justify-center items-center gap-10 text-card-foreground md:col-span-4">
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
        <li className={isActive("/contact-us")}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li className={isActive("/about-us")}>
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>

      <div className="flex items-center justify-end">
        {session?.user ? (
          <>
            {/* Cart Button */}
            <div>
              <Link href="/dashboard/user/cart">
                <div className="relative">
                  <Button variant={"secondary"} className="ml-2 mr-2">
                    <ShoppingCart />
                  </Button>
                  {cartItems ? (
                    <Badge className="hidden md:flex absolute h-2 w-2 p-[7px] text-xs rounded-full top-0 right-2 translate-x-1/2 -translate-y-1/2 justify-center items-center outline outline-slate-50 outline-4">
                      {cartItems || ""}
                    </Badge>
                  ) : (
                    <></>
                  )}
                </div>
              </Link>
            </div>
            <div>
              {/* Dashboard Button */}
              <Link href="/dashboard">
                <Button className=" ml-2 mr-2">Dashboard</Button>
              </Link>
            </div>
            {/* User Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="h-full mx-2">
                <Image
                  className="h-full rounded-full object-cover outline outline-slate-400"
                  src={
                    session?.user?.image_url ||
                    "https://i.ibb.co.com/Nnt2N26/user-placeholder.png"
                  }
                  height={25}
                  width={25}
                  alt={"Logged In user Avatar"}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={"/dashboard/user/cart"}>Cart</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/dashboard/user/info"}>Balance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/dashboard/user/wish-list"}>WishList</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard">
                    <Button size={"sm"}>Dashboard</Button>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <LogOut variant="secondary" className=" px-2" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
              <DropdownMenuItem asChild>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/products">Products</Link>
              </DropdownMenuItem>
              {session?.user && (
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                <Link href="/contact-us">Contact Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about-us">About Us</Link>
              </DropdownMenuItem>
              {session?.user ? (
                <DropdownMenuItem asChild>
                  <LogOut variant="secondary" className=" px-2" />
                </DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/register">
                      <Button variant="secondary" className="w-full text-sm">
                        Register
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/login">
                      <Button className="w-full text-sm">Login</Button>
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Theme Toggle */}
      </div>
    </Card>
  );
};

export default Navbar;

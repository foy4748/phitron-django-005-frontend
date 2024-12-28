import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Sprout } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import Link from "next/link";

const Navbar = () => {
  return (
    <Card className="bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5 w-full">
      {/* ICON */}
      <Sprout />
      <ul className="hidden md:flex items-center gap-10 text-card-foreground">
        <li className="text-primary font-medium">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>

      <div className="flex items-center">
        <Link href="/register">
          <Button variant="secondary" className="hidden md:block px-2">
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button className="hidden md:block ml-2 mr-2">Get Started</Button>
        </Link>

        <div className="flex md:hidden mr-2 items-center gap-2">
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
                <Link href="/register">Register</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/login">
                  <Button variant="secondary" className="w-full text-sm">
                    Login
                  </Button>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full text-sm">Get Started</Button>
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

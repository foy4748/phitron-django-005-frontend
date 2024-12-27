import LogOut from "@/components/LogOut";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import FeaturedProducts from "./home/components/FeaturedProducts";
import Banner from "./home/components/Banner";
import CategoryList from "./home/components/CategoryList";

export default async function Home() {
  const s = await getServerSession(authOptions);
  return (
    <section>
      <Banner />
      <CategoryList />

      <FeaturedProducts />
      <nav>
        <ul>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/register">
            <li>Register</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>

          <Link href="/reset-password">
            <li>Reset Password</li>
          </Link>
          {s && <LogOut />}
        </ul>
      </nav>
    </section>
  );
}

import LogOut from "@/components/LogOut";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

export default async function Home() {
  const s = await getServerSession(authOptions);
  return (
    <section>
      <h1>Welcome</h1>
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
          <Link href="/cart">
            <li>Cart Items</li>
          </Link>
          <Link href="/wish-list">
            <li>Wish List</li>
          </Link>
          <Link href="/profile/purchase-history">
            <li>Purchase History</li>
          </Link>
          <Link href="/profile/deposite">
            <li>Deposite</li>
          </Link>
          <Link href="/profile/info">
            <li>Balance</li>
          </Link>
          <Link href="/profile/change-password">
            <li>Change Password</li>
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

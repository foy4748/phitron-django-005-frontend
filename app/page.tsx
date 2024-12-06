import Link from "next/link";

export default function Home() {
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
            <li>Products</li>
          </Link>
          <Link href="/purchase-history">
            <li>Products</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
}

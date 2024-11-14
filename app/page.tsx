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
        </ul>
      </nav>
    </section>
  );
}

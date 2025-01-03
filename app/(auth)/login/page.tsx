import { Suspense } from "react";
import LoginPageView from "./components/LoginPageView";
import Loading from "@/app/products/loading";

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading />}>
      <LoginPageView />
    </Suspense>
  );
}

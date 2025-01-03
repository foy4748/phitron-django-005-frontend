import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import ProductCardGrid from "./components/ProductCardGrid";

// Product Fetch Func

// const repeat = (arr: TSingleProduct[], n: number) =>
//   Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);

export default async function ProductCardPage({
  searchParams,
}: {
  searchParams: Promise<ReadonlyURLSearchParams>;
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductCardGrid searchParams={searchParams} />
      </Suspense>
    </>
  );
}

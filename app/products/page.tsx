import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import ProductCardGrid from "./components/ProductCardGrid";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";

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
        <div className="flex justify-end mt-4">
          <SearchAndFilterProduct />
        </div>
        <ProductCardGrid searchParams={searchParams} />
      </Suspense>
    </>
  );
}

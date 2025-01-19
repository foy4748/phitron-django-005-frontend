import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import ProductCardGrid from "./components/ProductCardGrid";
import { ReadonlyURLSearchParams } from "next/navigation";

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
      <div className="flex justify-end mt-4">
        <SearchAndFilterProduct />
      </div>
      <ProductCardGrid searchParams={searchParams} />
    </>
  );
}

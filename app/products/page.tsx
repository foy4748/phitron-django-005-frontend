import { Metadata } from "next";
import ProductCardGrid from "./components/ProductCardGrid";
import { ReadonlyURLSearchParams } from "next/navigation";

// Product Fetch Func

// const repeat = (arr: TSingleProduct[], n: number) =>
//   Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);

export const metadata: Metadata = {
  title: "Products",
  description: "Access your grocery products here.",
};

export default async function ProductCardPage({
  searchParams,
}: {
  searchParams: Promise<ReadonlyURLSearchParams>;
}) {
  return (
    <>
      <ProductCardGrid searchParams={searchParams} />
    </>
  );
}

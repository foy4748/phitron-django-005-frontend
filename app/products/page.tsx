import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import ProductCardGridUseClient from "./components/ProductCardGridUseClient";

// Product Fetch Func

// const repeat = (arr: TSingleProduct[], n: number) =>
//   Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);

export default async function ProductCardPage() {
  return (
    <>
      <div className="flex justify-end mt-4">
        <SearchAndFilterProduct />
      </div>
      <ProductCardGridUseClient />
    </>
  );
}

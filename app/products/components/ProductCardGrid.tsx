import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import { ReadonlyURLSearchParams } from "next/navigation";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import { getProductList } from "@/actions/product/getProductList";
import ProductCard from "@/app/products/components/ProductCard";
import CategoryTitle from "@/app/products/components/CategoryTitle";
import { TProductList } from "@/types/product";
import ProductPagination from "@/app/products/components/Pagination";

// Product Fetch Func

// const repeat = (arr: TSingleProduct[], n: number) =>
//   Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);

export default async function ProductCardGrid({
  searchParams,
}: {
  searchParams: Promise<ReadonlyURLSearchParams>;
}) {
  const s = await searchParams;
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  params.limit = params?.limit || 12;
  const queryStr = new URLSearchParams(params).toString();
  const product_list: TProductList = await getProductList(queryStr);
  return (
    <>
      <div className="flex justify-end mt-4">
        <SearchAndFilterProduct />
      </div>
      <h1 className="my-4">
        <CategoryTitle className="text-4xl" />
      </h1>
      <GridSystem>
        {Array.isArray(product_list?.results) &&
          product_list?.results?.map((p, idx) => {
            return (
              <Col key={idx}>
                <ProductCard data={p} />
              </Col>
            );
          })}
      </GridSystem>
      <ProductPagination count={product_list.count} limit={params.limit} />
    </>
  );
}

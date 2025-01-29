import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import { ReadonlyURLSearchParams } from "next/navigation";
import { getProductList } from "@/actions/product/getProductList";
import ProductCard from "@/app/products/components/ProductCard";
import CategoryTitle from "@/app/products/components/CategoryTitle";
import { TProductList } from "@/types/product";
import ProductPagination from "@/app/products/components/Pagination";
import { cn } from "@/lib/utils";

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
      <section>
        <div
          className={`flex ${cn({
            "justify-between": product_list.count > (params.limit || 12),
            "justify-end": product_list.count <= (params.limit || 12),
          })} bg-white dark:bg-blend-darken mt-4 sticky top-0`}
        >
          <ProductPagination
            className="justify-start"
            count={product_list.count}
            limit={params.limit}
          />
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
      </section>
    </>
  );
}

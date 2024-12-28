import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import { ReadonlyURLSearchParams } from "next/navigation";
import { SearchAndFilterProduct } from "./components/SearchAndFilterProduct";
import { getProductList } from "@/actions/product/getProductList";
import ProductCard from "./components/ProductCard";
import CategoryTitle from "./components/CategoryTitle";
import { Suspense } from "react";
import Loading from "./loading";

// Product Fetch Func

// const repeat = (arr: TSingleProduct[], n: number) =>
//   Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);

export default async function ProductCardGrid({
  searchParams,
}: {
  searchParams: ReadonlyURLSearchParams;
}) {
  const s = await searchParams;
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  const queryStr = new URLSearchParams(params).toString();
  const product_list = await getProductList(queryStr);
  const d = await getServerSession(authOptions);
  return (
    <>
      <p>{JSON.stringify(d)}</p>
      <SearchAndFilterProduct />
      <h1 className="my-4">
        <CategoryTitle className="text-4xl" />
      </h1>
      <Suspense fallback={<Loading />}>
        <GridSystem>
          {Array.isArray(product_list) &&
            product_list.map((p, idx) => {
              return (
                <Col key={idx}>
                  <ProductCard data={p} />
                </Col>
              );
            })}
        </GridSystem>
      </Suspense>
    </>
  );
}

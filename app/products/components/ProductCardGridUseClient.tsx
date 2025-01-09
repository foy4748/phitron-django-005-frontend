"use client";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import { useSearchParams } from "next/navigation";
import { getProductList } from "@/actions/product/getProductList";
import ProductCard from "@/app/products/components/ProductCard";
import CategoryTitle from "@/app/products/components/CategoryTitle";
import { TProductList } from "@/types/product";
import ProductPagination from "@/app/products/components/Pagination";
import { useEffect, useState } from "react";
import Loading from "../loading";

// Product Fetch Func

// const repeat = (arr: TSingleProduct[], n: number) =>
//   Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);

export default function ProductCardGridUseClient() {
  const s = useSearchParams();
  const [product_list, setProductList] = useState<TProductList>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      const strParams = JSON.stringify(s);
      const params = JSON.parse(strParams);
      params.limit = params?.limit || 12;
      const queryStr = new URLSearchParams(params).toString();
      const productList: TProductList = await getProductList(queryStr);
      setProductList(productList);
      setLoading(false);
    })();
  }, [s]);
  if (loading) return <Loading cardsNumber={12} />;
  return (
    <>
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
      <ProductPagination
        count={product_list.count}
        limit={Number(s.get("limit")) || 12}
      />
    </>
  );
}

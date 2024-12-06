import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import { TSingleProduct } from "@/types/product";
import Link from "next/link";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import { ReadonlyURLSearchParams } from "next/navigation";
import { SearchAndFilterProduct } from "./components/SearchAndFilterProduct";

// Product Fetch Func
export const getProductList = async (queryStr?: string) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(
    `${S}/product-list/${queryStr ? `?${queryStr}` : ""}`
  );
  const data: TSingleProduct[] = await res.json();

  return data;
};

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
  // {repeat(product_list, 9).map((p, idx) => {
  return (
    <>
      <p>{JSON.stringify(d)}</p>
      <SearchAndFilterProduct />
      <GridSystem>
        {product_list.map((p, idx) => {
          return (
            <Col key={idx}>
              <Card className="h-full flex flex-col justify-between">
                <figure className="h-full flex flex-col justify-center items-center">
                  <Image
                    src={p.image_url}
                    alt={`${p.product_name} by ${p.product_owner}`}
                    width={300}
                    height={300}
                    className="w-full object-scale-down"
                  />
                </figure>
                <article>
                  <CardHeader>
                    <CardTitle>{p.product_name}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <p className="text-xl font-semibold">
                      $ {p.unit_price} / {p.unit_name}
                    </p>
                    <CardDescription>{p.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Link href={`/products/${p.id}`}>
                      <Button>Details</Button>
                    </Link>
                  </CardFooter>
                </article>
              </Card>
            </Col>
          );
        })}
      </GridSystem>
    </>
  );
}

import { cn } from "@/lib/utils";
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

// Product Fetch Func
export const getProductList = async () => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(`${S}/product-list/`);
  const data: TSingleProduct[] = await res.json();

  return data;
};

const repeat = (arr: TSingleProduct[], n: number) =>
  Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);

export default async function ProductCardGrid() {
  const product_list = await getProductList();
  return (
    <>
      <GridSystem>
        {repeat(product_list, 9).map((p, idx) => {
          return (
            <Col key={idx}>
              <Card>
                <Image
                  src={p.image_url}
                  alt={`${p.product_name} by ${p.product_owner}`}
                  width={300}
                  height={300}
                  className="w-full object-scale-down"
                />
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
              </Card>
            </Col>
          );
        })}
      </GridSystem>
    </>
  );
}

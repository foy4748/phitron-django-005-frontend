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
import { getProductList } from "@/actions/products/getProducts";
import Image from "next/image";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import { TSingleProduct } from "@/types/product";

type CardProps = React.ComponentProps<typeof Card>;

const repeat = (arr: TSingleProduct[], n: number) =>
  Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);

export default async function ProductCard({ className, ...props }: CardProps) {
  const product_list = await getProductList();
  return (
    <>
      <GridSystem>
        {repeat(product_list, 9).map((p) => {
          return (
            <Col key={p.id}>
              <Card {...props}>
                <Image
                  src={p.image_url}
                  alt={`${p.product_name} by ${p.product_owner}`}
                  width={300}
                  height={300}
                  className="w-full"
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
                  <Button>Details</Button>
                </CardFooter>
              </Card>
            </Col>
          );
        })}
      </GridSystem>
    </>
  );
}

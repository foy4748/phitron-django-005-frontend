import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TSingleProduct } from "@/types/product";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ data }: { data: TSingleProduct }) {
  return (
    <>
      <Card className="h-full flex flex-col justify-between">
        <figure className="h-full flex flex-col justify-center items-center">
          <Image
            src={data.image_url}
            alt={`${data.product_name} by ${data.product_owner}`}
            width={300}
            height={300}
            className="w-full h-full object-scale-down"
          />
        </figure>
        <article className="h-full">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <CardTitle>{data.product_name} </CardTitle>
              <Badge className="bg-green-500 hover:bg-green-600">
                {data.category.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="h-full flex flex-col justify-between gap-y-4">
            <p className="text-xl font-semibold">
              $ {data.unit_price} / {data.unit_name}
            </p>
            <CardDescription>{data.description}</CardDescription>
            <CardFooter className="cardFooter p-0 pb-8 mb-8 flex justify-end">
              <Link href={`/products/${data.id}`}>
                <Button>Details</Button>
              </Link>
            </CardFooter>
          </CardContent>
        </article>
      </Card>
    </>
  );
}

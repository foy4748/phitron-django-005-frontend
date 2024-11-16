import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { Button } from "@/components/ui/button";
import { TProductOwner, TSingleProduct } from "@/types/product";
import Image from "next/image";
import AddToCartButton from "./components/AddToCartButton";

type Props = {
  params: Promise<{ id: string }>;
};

export const getSingleProduct = async (id: string) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(`${S}/product-detail/${id}`);
  const data: TSingleProduct = await res.json();

  return data;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;
  const data = await getSingleProduct(id);
  const { product_owner } = data as { product_owner: TProductOwner };
  return (
    <>
      <GridSystem>
        <Col className="col-span-6">
          <figure className="w-full">
            <Image
              src={data.image_url}
              width={400}
              height={300}
              className="w-full object-scale-down"
              alt={`${data.product_name} by ${JSON.stringify(
                data.product_owner
              )}`}
            />
          </figure>
        </Col>
        <Col className="col-span-6">
          <h1>{data?.product_name}</h1>
          <p>
            {" "}
            by {product_owner?.first_name} {product_owner?.last_name}
          </p>
          <p>
            Price: $ {data.unit_price} / {data.unit_name}
          </p>
          <h2>Description</h2>
          <p>{data.description}</p>
          <div className="flex gap-2">
            <AddToCartButton />
            <Button>Buy Now</Button>
          </div>
        </Col>
      </GridSystem>
    </>
  );
}

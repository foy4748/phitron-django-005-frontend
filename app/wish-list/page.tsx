import { getWishList } from "@/actions/wishList/getWishList";
import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Image from "next/image";
import moment from "moment";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function WishList() {
  const data = await getWishList();
  return (
    <>
      <div className="space-y-5">
        <h1 className="font-bold text-3xl">Wish List</h1>
        {data.map((d) => {
          return (
            <GridSystem key={d.id} className="relative">
              <Col className="flex justify-center items-center lg:col-span-6">
                <div className="space-y-1">
                  <h1 className="font-bold text-2xl">
                    {d.product.product_name}
                  </h1>
                  <p>Unit Price : {d.product.unit_price}</p>
                  <p>{d.product.description}</p>
                  <Link href={`/products/${d.product.id}`}>
                    {" "}
                    <Button> Details </Button>
                  </Link>
                </div>
              </Col>
              <Col className="lg:col-span-6">
                <figure className="flex justify-center w-full">
                  <Image
                    width={500}
                    height={300}
                    src={d.product.image_url}
                    alt=""
                  />
                </figure>
              </Col>
            </GridSystem>
          );
        })}
      </div>
    </>
  );
}

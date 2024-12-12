import { getPurchaseHistory } from "@/actions/purchaseHistory/getPurchaseHistroy";
import moment from "moment";
import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function PurchaseHistoryPage() {
  const data = await getPurchaseHistory();
  return (
    <>
      <div className="space-y-5">
        <h1 className="font-bold text-3xl">Purchase History</h1>
        {data.map((d) => {
          return (
            <GridSystem key={d.id} className="relative">
              <Col className="flex justify-center items-center lg:col-span-6">
                <div className="space-y-1">
                  <h1 className="font-bold text-2xl">
                    {d.product.product_name}
                  </h1>
                  <p>
                    Quanitity: {d.quantity} {d.product.unit_name}
                  </p>
                  <p>Unit Price : {d.product.unit_price}</p>
                  <p>
                    Total Price :{" "}
                    {Number(d.product.unit_price) * Number(d.quantity)}
                  </p>
                  <p>{d.product.description}</p>
                  <p>Purchased at: {moment(d.created_at).fromNow()} </p>
                  <div className="space-x-4">
                    <Link href={`/review/${d.product.id}`}>
                      <Button>Review Product</Button>
                    </Link>
                    <Link href={`/review/edit/${d.product.id}`}>
                      <Button>Edit Review</Button>
                    </Link>
                    <Link href={`/products/${d.product.id}`}>
                      <Button>Product Page</Button>
                    </Link>
                  </div>
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

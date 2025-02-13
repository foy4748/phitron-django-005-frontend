import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { TCartItem } from "@/types/cart";
import Image from "next/image";
import UpdateCartItemQuantity from "./components/UpdateCartItemQuantity";
import { DeleteCartItem } from "./components/DeleteCartItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCartItems } from "@/actions/cart/getCartItems";

export default async function CartList() {
  const data: TCartItem[] = await getCartItems();
  if (data?.length)
    return (
      <>
        <section>
          <Link href={"/dashboard/user/checkout"}>
            <Button>Checkout</Button>
          </Link>
          {Array.isArray(data) &&
            data.map((d) => {
              return (
                <GridSystem key={d.id} className="relative">
                  <Col>
                    <figure>
                      <Image
                        width={500}
                        height={300}
                        src={d.product.image_url}
                        alt=""
                      />
                    </figure>
                  </Col>
                  <Col className="flex items-center">
                    <div>
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
                    </div>
                  </Col>
                  <Col className="flex items-center justify-center">
                    <UpdateCartItemQuantity cartItem={d} />
                  </Col>
                  <DeleteCartItem
                    id={d.id}
                    className="absolute top-0 right-0"
                  />
                </GridSystem>
              );
            })}
        </section>
      </>
    );
  else
    return (
      <>
        <h1 className="text-center my-12 text-slate-300 text-4xl font-semibold">
          No products added to Cart yet
        </h1>
      </>
    );
}

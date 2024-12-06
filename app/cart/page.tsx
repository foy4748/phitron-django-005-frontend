import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { TCartItem } from "@/types/cart";
import { cookies } from "next/headers";
import Image from "next/image";
import UpdateCartItemQuantity from "./components/UpdateCartItemQuantity";
import { DeleteCartItem } from "./components/DeleteCartItem";

const getCartItems = async () => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const ck = await cookies();
  const res = await fetch(`${S}/cart/cart-item-list/`, {
    credentials: "include",
    method: "GET",
    headers: {
      Authorization: `Token ${ck.get("token")?.value}`,
      "Content-Type": "application/json",
    },
    next: {
      tags: ["cartItems"],
    },
  });
  const data = await res.json();
  return data;
};

export default async function CartList() {
  const data: TCartItem[] = await getCartItems();
  return (
    <>
      <section>
        {data.map((d) => {
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
              <DeleteCartItem id={d.id} className="absolute top-0 right-0" />
            </GridSystem>
          );
        })}
      </section>
    </>
  );
}

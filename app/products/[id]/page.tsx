import Col from "@/components/customUI/GridSystem/Col";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import { TProductOwner, TSingleProduct } from "@/types/product";
import Image from "next/image";
import AddToCartButton from "./components/AddToCartButton";
import ProductReviewList from "./components/ProductReviewList";
import AddToWishList from "./components/AddToWishList";
import { getProductAndUserSpecificWishListItem } from "@/actions/wishList/getProductAndUserSpecificWishListItem";
import { getSingleProduct } from "@/actions/product/getSingleProduct";

type Props = {
  params: Promise<{ id: number | `${number}` }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;
  const data: TSingleProduct = await getSingleProduct(id);
  const isInWishList = await getProductAndUserSpecificWishListItem(Number(id));
  const { product_owner } = data as { product_owner: TProductOwner };
  return (
    <>
      <GridSystem>
        <Col className="lg:col-span-6">
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
        <Col className="lg:col-span-6 flex items-center">
          <div className="space-y-4">
            <h1 className="text-xl font-bold">{data?.product_name}</h1>
            <p>
              {" "}
              by{" "}
              <span className="italic">
                {product_owner?.first_name} {product_owner?.last_name}
              </span>
            </p>
            <p>
              Price: $ {data.unit_price} / {data.unit_name}
            </p>
            <h2>Description</h2>
            <p>{data.description}</p>
            <div className="flex gap-2">
              <AddToCartButton />
              {!isInWishList ? <AddToWishList product={data.id} /> : <></>}
            </div>
          </div>
        </Col>
      </GridSystem>
      <ProductReviewList id={Number(id)} />
    </>
  );
}

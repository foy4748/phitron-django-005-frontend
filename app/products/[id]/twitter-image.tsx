import { getSingleProduct } from "@/actions/product/getSingleProduct";
import { TSingleProduct } from "@/types/product";
import { ImageResponse } from "next/og";

export default async function Image({
  params,
}: {
  params: Promise<{ id: number | `${number}` }>;
}) {
  const { id } = await params;
  const singleProduct: TSingleProduct = await getSingleProduct(id);
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          objectFit: "cover",
        }}
      >
        <img
          src={singleProduct.image_url}
          width={1200}
          height={630}
          alt={singleProduct.product_name}
        />
      </div>
    )
  );
}

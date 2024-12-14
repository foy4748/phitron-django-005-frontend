import { AddOrUpdateProductReview } from "@/app/products/[id]/components/AddOrUpdateProductReview";
import UserSpecificProductReview from "./components/UserSpecificProductReview";
import { getSpecifcProduct } from "@/actions/product/getSpecificProduct";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};
export default async function ReviewPage({ params }: Props) {
  const p = await params;
  const product = await getSpecifcProduct(Number(String(p.id)));
  return (
    <>
      <section className="gap-y-4 lg:gap-y-0 flex flex-col lg:flex-row">
        <aside className="w-full flex justify-center items-center">
          <div className="w-3/4">
            <h1 className="font-bold md:text-2xl lg:text-3xl">
              {product.product_name}
            </h1>
            <AddOrUpdateProductReview />
          </div>
        </aside>

        <aside className="w-full -order-1 lg:order-1">
          <figure className="flex justify-center lg:justify-end">
            <Image
              className="w-full  border-2 border-slate-100 object-scale-down"
              src={product.image_url}
              width={500}
              height={300}
              alt={product.product_name}
            />
          </figure>
        </aside>
      </section>
      <h2 className="font-bold text-3xl">Previous Reviews</h2>
      <UserSpecificProductReview product_id={Number(String(p.id))} />
    </>
  );
}

import { AddOrUpdateProductReview } from "@/app/products/[id]/components/AddOrUpdateProductReview";
import AddOrUpdateProduct from "@/app/products/add/components/AddOrUpdateProduct";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ReviewUpdatePage({ params }: Props) {
  const p = await params;
  return (
    <>
      <AddOrUpdateProductReview editMode review_id={Number(String(p.id))} />
    </>
  );
}

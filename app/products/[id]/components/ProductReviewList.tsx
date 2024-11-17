import { TProductReview } from "@/types/review";

const getProductReviewList = async (id) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(`${S}/review/product-review-list/?product=${id}`);
  const data: TProductReview = await res.json();

  return data;
};

type PropType = { id: string };

export default async function ProductReviewList({ id }: PropType) {
  const data = await getProductReviewList(id);
  return <>{JSON.stringify(data)}</>;
}

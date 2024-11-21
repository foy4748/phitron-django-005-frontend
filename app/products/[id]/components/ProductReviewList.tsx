import { TProductReview } from "@/types/review";

const getProductReviewList = async (id: number | `${number}`) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(`${S}/review/product-review-list/?product=${id}`);
  const data: TProductReview = await res.json();

  return data;
};

type PropType = { id: number | `${number}` };

export default async function ProductReviewList({ id }: PropType) {
  const data = await getProductReviewList(id);
  return <>{JSON.stringify(data)}</>;
}

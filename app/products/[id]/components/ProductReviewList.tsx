import { TProductReview } from "@/types/review";
import { DeleteReviewButton } from "./DeleteReviewButton";

const getProductReviewList = async (id: number | `${number}`) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(`${S}/review/product-review-list/?product=${id}`, {
    next: {
      tags: ["review-list"],
    },
  });
  const data: TProductReview[] = await res.json();

  return data;
};

type PropType = { id: number | `${number}` };

export default async function ProductReviewList({ id }: PropType) {
  const data = await getProductReviewList(id);
  return (
    <>
      {data.map((r) => {
        return (
          <div key={r?.id} className="flex">
            <p>{r?.review_text}</p>
            <DeleteReviewButton id={Number(r?.id)} reviewer={r?.reviewer} />
          </div>
        );
      })}
    </>
  );
}

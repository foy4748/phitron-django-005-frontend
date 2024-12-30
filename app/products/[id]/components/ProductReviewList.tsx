import { TProductReview } from "@/types/review";
import { DeleteReviewButton } from "./DeleteReviewButton";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import UserSpecificProductReviewDialog from "@/app/dashboard/user/review/[id]/components/UserSpecificProductReviewDialog";

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
      <GridSystem>
        {Array.isArray(data) &&
          data?.map((d) => {
            return (
              <Col key={d.id} className="flex justify-center items-center">
                <div>
                  <UserSpecificProductReviewDialog singleReviewData={d} />
                </div>
              </Col>
            );
          })}
      </GridSystem>
    </>
  );
}

import { getUserSpecifcReviews } from "@/actions/review/getUserSpecificReviews";
import { TProductReview } from "@/types/review";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import UserSpecificProductReviewDialog from "./UserSpecificProductReviewDialog";

export default async function UserSpecificProductReview({
  product_id,
}: {
  product_id: number | `${number}`;
}) {
  const data: TProductReview[] = await getUserSpecifcReviews(product_id);
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

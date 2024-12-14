import { getUserSpecifcReviews } from "@/actions/review/getUserSpecificReviews";
import { TProductReview } from "@/types/review";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddOrUpdateProductReview } from "@/app/products/[id]/components/AddOrUpdateProductReview";
import { PenSquareIcon } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import GridSystem from "@/components/customUI/GridSystem/GridSystem";
import Col from "@/components/customUI/GridSystem/Col";
import moment from "moment";
import { DialogDescription } from "@radix-ui/react-dialog";

export default async function UserSpecificProductReview({
  product_id,
}: {
  product_id: number | `${number}`;
}) {
  const data: TProductReview[] = await getUserSpecifcReviews(product_id);
  return (
    <>
      <GridSystem>
        {data?.map((d) => {
          return (
            <Col key={d.id} className="flex justify-center items-center">
              <div>
                <Dialog>
                  <DialogTitle>
                    <PenSquareIcon className="hidden" />
                  </DialogTitle>
                  <DialogDescription>
                    <p>{d.review_text}</p>
                    <Rating
                      readOnly
                      value={Number(String(d.rating))}
                      style={{ maxWidth: 200 }}
                    />
                    <p>{moment(d.created_at).fromNow()}</p>
                    <DialogTrigger className="mt-2 w-full flex justify-end items-center">
                      <PenSquareIcon />
                      {"  "} | Update Review
                    </DialogTrigger>
                  </DialogDescription>
                  <DialogContent>
                    <AddOrUpdateProductReview editMode review_id={d.id} />
                  </DialogContent>
                </Dialog>
              </div>
            </Col>
          );
        })}
      </GridSystem>
    </>
  );
}

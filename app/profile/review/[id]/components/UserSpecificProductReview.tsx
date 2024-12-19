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
import DeleteProductReview from "./DeleteProductReview";

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
                  <Dialog>
                    <DialogTitle>
                      <PenSquareIcon className="hidden" />
                    </DialogTitle>
                    <DialogDescription className="my-2">
                      {d.review_text}
                    </DialogDescription>
                    <div className="space-y-2">
                      <Rating
                        readOnly
                        value={Number(String(d.rating))}
                        style={{ maxWidth: 200 }}
                      />
                      <p className="text-right">
                        {moment(d.created_at).fromNow()}
                      </p>
                      <div className="flex items-center mt-2">
                        <DeleteProductReview review_id={d.id} />
                        <DialogTrigger className=" w-1/2 flex items-center hover:text-green-500">
                          <PenSquareIcon className="me-2" />| Update
                        </DialogTrigger>
                      </div>
                    </div>
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

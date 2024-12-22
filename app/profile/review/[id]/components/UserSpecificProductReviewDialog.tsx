"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddOrUpdateProductReview } from "@/app/products/[id]/components/AddOrUpdateProductReview";
import { PenSquareIcon } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import moment from "moment";
import { DialogDescription } from "@radix-ui/react-dialog";
import DeleteProductReview from "./DeleteProductReview";
import { useState } from "react";
import { TProductReview } from "@/types/review";

export default function UserSpecificProductReviewDialog({
  singleReviewData,
}: {
  singleReviewData: TProductReview;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTitle>
          <PenSquareIcon className="hidden" />
        </DialogTitle>
        <DialogDescription className="my-2">
          {singleReviewData.review_text}
        </DialogDescription>
        <div className="space-y-2">
          <Rating
            readOnly
            value={Number(String(singleReviewData.rating))}
            style={{ maxWidth: 200 }}
          />
          <p className="text-right">
            {moment(singleReviewData.created_at).fromNow()}
          </p>
          <div className="flex items-center mt-2">
            <DeleteProductReview review_id={singleReviewData.id} />
            <DialogTrigger className=" w-1/2 flex items-center hover:text-green-500">
              <PenSquareIcon className="me-2" />| Update
            </DialogTrigger>
          </div>
        </div>
        <DialogContent>
          <AddOrUpdateProductReview
            editMode
            review_id={singleReviewData.id}
            setIsDialogOpen={setIsDialogOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

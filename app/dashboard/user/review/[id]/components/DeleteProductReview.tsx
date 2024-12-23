"use client";

import { CircleX } from "lucide-react";
import { deleteReview } from "@/actions/review/deleteReview";
export function DeleteProductReview_() {
  return <></>;
}
// ===============
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function DeleteProductReview({
  review_id,
}: {
  review_id: number | `${number}`;
}) {
  const handleReviewDelete = async (review_id: number | `${number}`) => {
    try {
      const d = await deleteReview(review_id);
      console.log(d);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="w-1/2 flex hover:text-red-500 cursor-pointer">
          <CircleX className="me-2" />| Delete
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            review and remove it from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-700"
            onClick={() => handleReviewDelete(review_id)}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

"use client";
import { deleteReview } from "@/actions/review/deleteReview";

type PropTypes = {
  id: number | `${number}`;
};
export function DeleteReviewButton({ id }: PropTypes) {
  return (
    <>
      <p
        className="opacity-0 hover:opacity-100 hover:cursor-pointer"
        onClick={async () => await deleteReview(id)}
      >
        ❌
      </p>
    </>
  );
}

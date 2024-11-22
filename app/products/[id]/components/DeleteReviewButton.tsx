"use client";
import { deleteReview } from "@/actions/review/deleteReview";
import clsx from "clsx";
import { useSession } from "next-auth/react";

type PropTypes = {
  id: number | `${number}`;
  reviewer: number | `${number}`;
};
export function DeleteReviewButton({ id, reviewer }: PropTypes) {
  const { data } = useSession();
  return (
    <>
      <p
        className={`opacity-0 hover:opacity-100 hover:cursor-pointer ${clsx({
          hidden: data?.user?.user_id != reviewer,
        })}`}
        onClick={async () => await deleteReview(id)}
      >
        ❌
      </p>
    </>
  );
}

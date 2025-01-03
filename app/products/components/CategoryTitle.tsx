"use client";

import useCategory from "@/hooks/useCategory";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const CategoryTitle = ({ className }: { className?: string }) => {
  const searchParams = useSearchParams();
  const { mappedCategories } = useCategory();

  const categoryId = searchParams.get("category");
  if (categoryId)
    return (
      <>
        <span className={cn("text-bold font-2xl", className)}>
          {mappedCategories[Number(categoryId)]}
        </span>
      </>
    );
  else {
    return <></>;
  }
};

export default CategoryTitle;

"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  count: number | `${number}`;
  limit?: number | `${number}`;
};

export default function ProductPagination({ count, limit }: Props) {
  const pages = Math.ceil(Number(count) / (Number(limit) || 1));
  const repeat = (arr: number[], n: number) =>
    Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
  const pathname = usePathname();
  const s = useSearchParams();
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  if (pages > 1)
    return (
      <Pagination>
        <PaginationContent>
          {repeat(Array.from(Array(pages).keys()), 1).map((_, idx) => {
            const isActive = Number(s.get("page")) == _ + 1;
            const current_params = { ...params, page: _ + 1 };
            const queryStr = new URLSearchParams(current_params).toString();
            return (
              <PaginationItem key={idx}>
                <PaginationLink
                  isActive={isActive}
                  href={`${pathname}?${queryStr}`}
                >
                  {_ + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
    );
  else return <></>;
}

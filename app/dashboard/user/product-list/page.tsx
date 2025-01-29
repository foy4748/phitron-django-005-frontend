import { getProductList } from "@/actions/product/getProductList";
import UserProductListView from "@/app/dashboard/admin/product-list/components/ProductTable";
import { columns } from "@/app/dashboard/admin/product-list/components/ProductColumns";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import { ReadonlyURLSearchParams } from "next/navigation";
import { TProductList } from "@/types/product";
import ProductPagination from "@/app/products/components/Pagination";
import { cn } from "@/lib/utils";

export default async function UserProductListPage({
  searchParams,
}: {
  searchParams: Promise<ReadonlyURLSearchParams>;
}) {
  const s = await searchParams;
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  const queryStr = new URLSearchParams(params).toString();
  const data: TProductList = await getProductList(queryStr, false, true);
  return (
    <>
      <section>
        <div
          className={`flex ${cn({
            "justify-between": data.count > (params.limit || 10),
            "justify-end": data.count <= (params.limit || 10),
          })} bg-white my-4 sticky top-0 z-10`}
        >
          <ProductPagination
            className="justify-start"
            count={data.count}
            limit={10}
          />
          <SearchAndFilterProduct />
        </div>
        <UserProductListView columns={columns} data={data?.results || []} />
      </section>
    </>
  );
}

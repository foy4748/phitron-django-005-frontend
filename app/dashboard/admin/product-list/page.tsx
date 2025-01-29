import { getProductList } from "@/actions/product/getProductList";
import AdminProductListView from "./components/ProductTable";
import { columns } from "./components/ProductColumns";
import { ReadonlyURLSearchParams } from "next/navigation";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import { TProductList } from "@/types/product";
import ProductPagination from "@/app/products/components/Pagination";
import { cn } from "@/lib/utils";

export default async function AdminProductListPage({
  searchParams,
}: {
  searchParams: Promise<ReadonlyURLSearchParams>;
}) {
  const s = await searchParams;
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  const queryStr = new URLSearchParams(params).toString();
  const data: TProductList = await getProductList(queryStr, true);
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
        <AdminProductListView columns={columns} data={data?.results || []} />
      </section>
    </>
  );
}

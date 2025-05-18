import { getSoldItemList } from "@/actions/solditems/getSoldItemList";
import { columns } from "./components/SoldItemColumn";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import SellerProductOrderListView from "@/app/dashboard/admin/product-list/components/ProductTable";
import ProductPagination from "@/app/products/components/Pagination";
import { ReadonlyURLSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default async function MySoldItems({
  searchParams,
}: {
  searchParams: Promise<ReadonlyURLSearchParams>;
}) {
  const mySoldProducts = await getSoldItemList();
  const s = await searchParams;
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  return (
    <>
      <section>
        <div
          className={`flex ${cn({
            "justify-between": mySoldProducts?.length > (params.limit || 10),
            "justify-end": mySoldProducts?.length <= (params.limit || 10),
          })} bg-white my-4 sticky top-0 z-10`}
        >
          <ProductPagination
            className="justify-start"
            count={mySoldProducts?.length}
            limit={10}
          />
          <SearchAndFilterProduct />
        </div>
        <SellerProductOrderListView
          columns={columns}
          data={mySoldProducts || []}
        />
      </section>
    </>
  );
}

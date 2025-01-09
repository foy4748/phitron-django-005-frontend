import { getProductList } from "@/actions/product/getProductList";
import UserProductListView from "@/app/dashboard/admin/product-list/components/ProductTable";
import { columns } from "./components/ProductColumns";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import { ReadonlyURLSearchParams } from "next/navigation";
import { TProductList } from "@/types/product";
import ProductPagination from "@/app/products/components/Pagination";

export default async function UserProductListPage({
  searchParams,
}: {
  searchParams: Promise<ReadonlyURLSearchParams>;
}) {
  const s = await searchParams;
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  const queryStr = new URLSearchParams(params).toString();
  const data: TProductList = await getProductList(queryStr);
  return (
    <>
      <SearchAndFilterProduct />
      <UserProductListView columns={columns} data={data?.results} />
      <ProductPagination count={data.count} limit={10} />
    </>
  );
}

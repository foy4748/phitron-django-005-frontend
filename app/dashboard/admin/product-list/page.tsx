import { getProductList } from "@/actions/product/getProductList";
import AdminProductListView from "./components/ProductTable";
import { columns } from "./components/ProductColumns";
import { ReadonlyURLSearchParams } from "next/navigation";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import { TProductList } from "@/types/product";
import ProductPagination from "@/app/products/components/Pagination";

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
      <SearchAndFilterProduct />
      <AdminProductListView columns={columns} data={data?.results} />
      <ProductPagination count={data.count} limit={10} />
    </>
  );
}

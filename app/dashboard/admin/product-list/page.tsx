import { getProductList } from "@/actions/product/getProductList";
import AdminProductListView from "./components/ProductTable";
import { columns } from "./components/ProductColumns";
import { ReadonlyURLSearchParams } from "next/navigation";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";

export default async function AdminProductListPage({
  searchParams,
}: {
  searchParams: ReadonlyURLSearchParams;
}) {
  const s = searchParams;
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  const queryStr = new URLSearchParams(params).toString();
  const data = await getProductList(queryStr, true);
  return (
    <>
      <SearchAndFilterProduct />
      <AdminProductListView columns={columns} data={data} />
    </>
  );
}

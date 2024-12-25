import { getProductList } from "@/actions/product/getProductList";
import UserProductListView from "./components/ProductTable";
import { columns } from "./components/ProductColumns";
import { SearchAndFilterProduct } from "@/app/products/components/SearchAndFilterProduct";
import { ReadonlyURLSearchParams } from "next/navigation";

export default async function UserProductListPage({
  searchParams,
}: {
  searchParams: ReadonlyURLSearchParams;
}) {
  const s = searchParams;
  const strParams = JSON.stringify(s);
  const params = JSON.parse(strParams);
  const queryStr = new URLSearchParams(params).toString();
  const data = await getProductList(queryStr);
  return (
    <>
      <SearchAndFilterProduct />
      <UserProductListView columns={columns} data={data} />
    </>
  );
}

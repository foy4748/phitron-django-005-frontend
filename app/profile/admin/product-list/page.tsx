import { getProductList } from "@/actions/product/getProductList";
import AdminProductListView from "./components/ProductTable";
import { columns } from "./components/ProductColumns";

export default async function AdminProductListPage() {
  const data = await getProductList(undefined, true);
  return (
    <>
      <AdminProductListView columns={columns} data={data} />
    </>
  );
}

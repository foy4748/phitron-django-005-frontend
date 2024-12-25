import { getProductList } from "@/actions/product/getProductList";
import UserProductListView from "./components/ProductTable";
import { columns } from "./components/ProductColumns";

export default async function UserProductListPage() {
  const data = await getProductList();
  return (
    <>
      <UserProductListView columns={columns} data={data} />
    </>
  );
}

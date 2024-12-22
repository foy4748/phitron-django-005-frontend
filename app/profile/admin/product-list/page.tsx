import { getProductList } from "@/actions/product/getProductList";

export default async function AdminProductList() {
  const data = await getProductList(undefined, true);
  return (
    <>
      <h1>AdminProductList</h1>
      {data?.map((d) => {
        return <p key={d.id}>{JSON.stringify(d)}</p>;
      })}
    </>
  );
}

import AddOrUpdateProduct from "../../add/components/AddOrUpdateProduct";

export default async function ProductUpdateForm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const p = await params;
  const id = p?.id;
  return (
    <>
      <AddOrUpdateProduct editMode={true} product_id={Number(String(id))} />
    </>
  );
}

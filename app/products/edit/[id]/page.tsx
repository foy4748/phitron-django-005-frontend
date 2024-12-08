import AddOrUpdateProduct from "../../add/components/AddOrUpdateProduct";

export default function ProductUpdateForm({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  return (
    <>
      <AddOrUpdateProduct editMode={true} product_id={Number(String(id))} />
    </>
  );
}

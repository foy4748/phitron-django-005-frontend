import { AddOrUpdateProductReview } from "@/app/products/[id]/components/AddOrUpdateProductReview";

// type Props = {
//   params: Promise<{ id: string }>;
// };
export default async function ReviewPage() {
  return (
    <>
      <AddOrUpdateProductReview />
    </>
  );
}

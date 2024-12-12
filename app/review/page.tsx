import { getUserSpecifcReviews } from "@/actions/review/getUserSpecificReviews";

export default async function MyReviews() {
  const data = await getUserSpecifcReviews();
  return <>{JSON.stringify(data)}</>;
}

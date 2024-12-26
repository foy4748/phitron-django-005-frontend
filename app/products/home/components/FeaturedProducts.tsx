import { getRandomProductList } from "@/actions/product/getRandomProductList";

export default async function FeaturedProducts() {
  const data = await getRandomProductList();
  return <></>;
}

import { getWishList } from "@/actions/wishList/getWishList";

export default async function WishList() {
  const data = await getWishList();
  return <>{JSON.stringify(data)}</>;
}

import { getPurchaseHistory } from "@/actions/purchaseHistory/getPurchaseHistroy";

export default async function PurchaseHistoryPage() {
  const data = await getPurchaseHistory();
  return <>{JSON.stringify(data)}</>;
}

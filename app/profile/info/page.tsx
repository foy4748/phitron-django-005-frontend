import { checkDeposite } from "@/actions/profile/deposite/checkDeposite";

export default async function CheckBalance() {
  const { balance } = await checkDeposite();
  return <>{balance}</>;
}

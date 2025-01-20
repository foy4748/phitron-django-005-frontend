import { checkDeposite } from "@/actions/profile/deposite/checkDeposite";

export default async function CheckBalance() {
  const { balance } = await checkDeposite();
  return (
    <>
      <div className="gap-y-4 flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">Current Balance</h1>
        <p className="italic">{balance}</p>
      </div>
    </>
  );
}

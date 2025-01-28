import { depositeCurrency } from "@/actions/profile/deposite/depositeCurrency";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

type PropType = {
  transaction_id: string;
};

export const POST = async (
  _: NextRequest,
  { params }: { params: Promise<PropType> }
) => {
  // const body = await req.json();
  const p = await params;
  const { transaction_id } = p;
  console.log(transaction_id);
  const result = await depositeCurrency({
    transaction_id: String(transaction_id[0]),
    amount: Number(transaction_id[1]),
  });
  console.log(result);
  return redirect("/dashboard/user/info");
  // return NextResponse.json({ success: true });
};

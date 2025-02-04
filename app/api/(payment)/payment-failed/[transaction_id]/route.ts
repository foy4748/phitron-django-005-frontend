import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

type PropType = {
  transaction_id: string;
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<PropType> }
) => {
  // const body = await req.json();
  const p = await params;
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const ck = await cookies();
  const url = `${S}/transaction/failed-transaction/${p.transaction_id}/`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Token ${ck.get("token")?.value}`,
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  console.log(result);
  return redirect("/dashboard/user/purchase-history?payment-failed=1");
  // return NextResponse.json({ success: true });
};

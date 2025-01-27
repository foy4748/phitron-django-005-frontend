import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

type PropType = {
  transaction_id: string;
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<PropType> }
) => {
  // const body = await req.json();
  const p = await params;
  console.log(req, p);
  return redirect("/dashboard/user/purchase-history");
  // return NextResponse.json({ success: true });
};

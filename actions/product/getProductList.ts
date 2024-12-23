import { cookies } from "next/headers";
import { TSingleProduct } from "@/types/product";
export const getProductList = async (
  queryStr?: string,
  isAdminOnly?: boolean
) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const ck = await cookies();
  const url = isAdminOnly
    ? `${S}/admin-specific/product-list`
    : `${S}/product-list`;

  const res = await fetch(`${url}/${queryStr ? `?${queryStr}` : ""}`, {
    headers: {
      Authorization: `Token ${ck.get("token")?.value}`,
      "Content-Type": "application/json",
    },
  });
  const data: TSingleProduct[] = await res.json();
  console.log(url, data);
  return data;
};

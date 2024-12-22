import { TSingleProduct } from "@/types/product";
export const getProductList = async (
  queryStr?: string,
  isAdminOnly?: boolean
) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const url = isAdminOnly
    ? `${S}/product-list`
    : `${S}/admin-specific/product-list`;
  const res = await fetch(`${url}/${queryStr ? `?${queryStr}` : ""}`);
  const data: TSingleProduct[] = await res.json();

  return data;
};

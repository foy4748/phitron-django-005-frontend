"use server";

import { TSingleProduct } from "@/types/product";

export const getProductList = async () => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(`${S}/product-list/`);
  const data: TSingleProduct[] = await res.json();

  return data;
};

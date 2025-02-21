"use server";

import { TSingleProduct } from "@/types/product";

export const getSingleProduct = async (id: number | `${number}`) => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const res = await fetch(`${S}/product-detail/${id}`);
  const data: TSingleProduct = await res.json();

  return data;
};

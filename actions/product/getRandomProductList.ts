"use server";
import { TSingleProduct } from "@/types/product";
export const getRandomProductList = async () => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const url = `${S}/random-product-list`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: TSingleProduct[] = await res.json();
  return data;
};

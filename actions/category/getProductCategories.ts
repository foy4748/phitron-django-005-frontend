"use server";
import { TProductCategory } from "@/types/product";
export const getProductCategoryList = async () => {
  const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
  const url = `${S}/category-list`;

  // Very Useful
  // https://stackoverflow.com/questions/11704267/in-javascript-how-to-conditionally-add-a-member-to-an-object
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["category-list"],
    },
  });
  const data: TProductCategory[] = await res.json();
  const mappedCategory = data.reduce((acc, curr) => {
    acc[curr.id] = curr.category;
    return acc;
  }, {} as { [key: number | `${number}`]: string });
  return {
    categoryList: data,
    mappedCategory,
  };
};

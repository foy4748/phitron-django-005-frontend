import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { TProductCategory } from "@/types/product";

const useCategory = () => {
  const [categories, setCategories] = useState<TProductCategory[]>([]);
  useEffect(() => {
    const S = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    fetch(`${S}/category-list/`)
      .then((res) => res.json())
      .then((d: TProductCategory[]) => {
        setCategories(d);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { categories, setCategories };
};

export default useCategory;

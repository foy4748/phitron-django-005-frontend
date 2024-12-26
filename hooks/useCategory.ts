import { useEffect, useState } from "react";
import { TProductCategory } from "@/types/product";
import { getProductCategoryList } from "@/actions/category/getProductCategories";

const useCategory = () => {
  const [categories, setCategories] = useState<TProductCategory[]>([]);
  const [mappedCategories, setMappedCategories] = useState<{
    [key: number | `${number}`]: string;
  }>({});
  useEffect(() => {
    getProductCategoryList()
      .then(({ categoryList, mappedCategory }) => {
        setCategories(categoryList);
        setMappedCategories(mappedCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { categories, setCategories, mappedCategories, setMappedCategories };
};

export default useCategory;

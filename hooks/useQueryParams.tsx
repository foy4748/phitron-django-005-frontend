import { useSearchParams } from "next/navigation";

interface QueryParams {
  [key: string]: string;
}

const useQueryParams = (): QueryParams => {
  const searchParams = useSearchParams();
  const params: QueryParams = {};

  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
};

export default useQueryParams;

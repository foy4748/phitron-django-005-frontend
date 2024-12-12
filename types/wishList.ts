import { TSingleProduct } from "./product";

export type TWishListItem = {
  id: `${number}` | number;
  product: TSingleProduct;
  created_at: string;
  updated_at: string;
};
export type TAddToWishListPayload = {
  product: `${number}` | number;
};

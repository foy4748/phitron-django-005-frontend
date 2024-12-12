import { TSingleProduct } from "./product";

export type TpurchaseProduct = {
  id: number | `${number}`;
  product: TSingleProduct;
  unit_price: number | `${number}`;
  unit_name: string;
  quantity: number | `${number}`;
  created_at: string;
};

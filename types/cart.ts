import { TSingleProduct } from "./product";

export type TAddToCartPayload = {
  quantity: `${number}` | number;
  product: `${number}` | number;
};

export type TUpdateCartItemPayload = {
  quantity: `${number}` | number;
};

// Cart Item Type
export interface TCartItem {
  id: number;
  cart_item_owner: TCartItemOwner;
  quantity: number;
  product: TSingleProduct;
}

export interface TCartItemOwner {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  people_info: TPeopleInfo;
}

export interface TPeopleInfo {
  image_url: string;
  phone_no: string;
}

// // End of Cart Item Type

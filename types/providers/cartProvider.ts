import { Dispatch, SetStateAction } from "react";

export type TCartContext = {
  cartItems: number | `${number}`;
  setCartItems: Dispatch<SetStateAction<number | `${number}`>>;
  addNewItemToCart: () => void;
  removeAnItemFromCart: () => void;
};

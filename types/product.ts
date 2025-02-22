type TPeopleInfo = {
  image_url: string;
  phone_no: string;
};

export type TProductOwner = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  people_info: TPeopleInfo;
};

export type TProductCategory = {
  id: number | `${number}`;
  category: string;
  created_at: string;
  updated_at: string;
};

export type TSingleProduct = {
  id: number;
  product_name: string;
  image_url: string;
  unit_price: number | `${number}`;
  unit_name: string;
  description: string;
  product_owner: number | TProductOwner;
  category: TProductCategory;
  created_at: string;
  updated_at: string;
};

export type TProductList = {
  count: number | `${number}`;
  next: string | null;
  previous: string | null;
  results: TSingleProduct[];
};

export type TProductPayload = {
  product_name: string;
  image_url: string;
  unit_price: number | `${number}`;
  unit_name: string;
  description: string;
  category: number | TProductCategory;
};

export type TProductReview = {
  id: `${number}` | number;
  review_text: string;
  rating: `${number}` | number;
  product: `${number}` | number;
  reviewer: `${number}` | number;
  created_at: string;
};

export type TProductReviewPayload = {
  review_text: string;
  rating: `${number}` | number;
  product: `${number}` | number;
};

export type TProductReviewUpdatePayload = {
  review_text: string;
  rating: `${number}` | number;
};

export type TProductReview = {
  id: `${number}` | number;
  review_text: string;
  rating: `${number}` | number;
  product: `${number}` | number;
  reviewer: `${number}` | number;
};

export type TProductReviewPayload = {
  review_text: string;
  rating: `${number}` | number;
  product: `${number}` | number;
};

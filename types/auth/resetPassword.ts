export type TResetPasswordPayload = {
  token: string;
  uid64: string;
  new_password: string;
};

export type TResetPasswordRequest = {
  email: string;
};

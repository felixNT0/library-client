import { AxiosResponse } from "axios";
import http from "../../api/http";
import { UserType } from "../../types/UserType";

export type SignUpPayload = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  imageUrl?: string;
};

export const signUpUser = (
  data: SignUpPayload
): Promise<AxiosResponse<UserType>> => {
  return http.post(`/users/signup`, data);
};

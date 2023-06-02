import { AxiosResponse } from "axios";
import http from "../../api/http";
import { UserType } from "../../types/UserType";

export type LoginPayload = {
  email: string;
  password: string;
};

export const loginUser = (
  data: LoginPayload
): Promise<AxiosResponse<UserType>> => {
  return http.post(`/users/login`, data);
};

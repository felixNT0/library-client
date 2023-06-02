import http from "../../api/http";
import { UserType } from "../../types/UserType";

export const GET_USER_PROFILE = "GET_USER_PROFILE";

export const getUserProfile = (): Promise<UserType> => {
  return http.get(`/users/profile`);
};

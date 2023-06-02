/* eslint-disable @typescript-eslint/no-redeclare */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import navigationStrings from "../navigations/navigationStrings";
import { UserType } from "../types/UserType";
import { getAuthToken, removeAuthToken } from "../utils/localStorage";

export interface UserContextType extends UserType {
  isLoggedIn?: boolean | null;
}

export const defaultUser: UserContextType = {
  token: "",
  _id: "",
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  phone_number: "",
  isLoggedIn: null,
};

type UserContext = {
  currentUser: UserContextType;
  logout: () => void;
  // updateCurrentUser: () => void;
  // isLoading: boolean;
};

const UserContext = createContext<UserContext>({
  currentUser: defaultUser,
  logout: () => {},
  // isLoading: false,
  // updateCurrentUser: () => {},
});

export default function AppProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<UserContextType>(defaultUser);

  const navigate = useNavigate();

  const { accessToken } = getAuthToken();

  // const { refetch, isLoading } = useQuery(
  //   [QUERY_KEYS_USER_PROFILE_CONTEXT],
  //   fetchUserProfile,
  //   {
  //     enabled: !!accessToken,
  //     onSuccess: (res: any) => {
  //       setCurrentUser(() => ({ ...res, isLoggedIn: true }));
  //     },
  //     onError: () => {
  //       setCurrentUser(() => ({ ...defaultUser, isLoggedIn: false }));
  //       logout();
  //     },
  //   }
  // );

  const logout = () => {
    removeAuthToken();
    setCurrentUser(() => ({ ...defaultUser, isLoggedIn: false }));
  };

  useEffect(() => {
    if (currentUser.isLoggedIn === false) {
      navigate(navigationStrings.SIGN_IN);
    }
  }, [currentUser.isLoggedIn]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        logout,
        // updateCurrentUser: refetch,
        // isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useAppContext = () => useContext(UserContext);

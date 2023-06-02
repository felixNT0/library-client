type Props = {
  accessToken?: string;
};

export const setAuthToken = ({ accessToken }: Props) => {
  if (typeof window !== "undefined") {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
  }
};

type GetAuthTokenProps = {
  accessToken: string | null;
};

export const getAuthToken = (): GetAuthTokenProps => {
  if (typeof window !== "undefined") {
    let accessToken = localStorage.getItem("accessToken");

    return { accessToken };
  }
  return { accessToken: null };
};

export const removeAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("accessToken");
  }
};

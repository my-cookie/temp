import { useState, createContext } from "react";

export const AuthContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
});

export function AuthContextProvider(props) {
  const [user, setUser] = useState({});
  const [accessToken, setAccessToken] = useState();

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

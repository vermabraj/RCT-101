import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);

  const logIn = () => {
    setIsAuth(true);
  };
  const logOut = () => {
    setIsAuth(false);
  };
  return (
    <div>
      <AuthContext.Provider value={{ isAuth, logIn, logOut }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

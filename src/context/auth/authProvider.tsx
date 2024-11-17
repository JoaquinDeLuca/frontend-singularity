import { PropsWithChildren, useState } from "react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState<string>('');
  const navigate = useNavigate();


  // Seteamos el token en el state y redirigimos al home
  const login = (token: string) => {
    setAuth(token);

    navigate("/home", {
      replace: true
    });
  };

  const logout = () => {
    setAuth('');

    navigate("/login", {
      replace: true
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
import { createContext, useEffect, useState } from "react";
import customAxiosPrivate from "../api/axiosInstanse";
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: null,
    password: null,
    accessToken: null,
    auth: true, // solo cambie esto preguntar a fede
  });
  const verifyToken = async () => {
    try {
      const { data } = await customAxiosPrivate.get("/api/user/verifyuser");
      const { loginStatus /* userName,  userNavBar*/ } = data;
      if (loginStatus) {
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        setAuth({
          email: null,
          password: null,
          accessToken: token,
          auth: true,
        });
      } else {
        setAuth({
          email: null,
          password: null,
          accessToken: null,
          auth: false,
        });
      }
    } catch (error) {
      console.log(`Error verifying token: ${error}`);
      setAuth({
        email: null,
        password: null,
        accessToken: null,
        auth: false,
      });
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

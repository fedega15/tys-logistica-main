import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const {auth} = useAuth()
  console.log(auth.auth)
  return auth.auth ? <>{children}</> : <Navigate to="/login" />;
}
export default PrivateRoute
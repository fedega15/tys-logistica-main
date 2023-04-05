import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { auth } = useContext(AuthContext) || {}
  console.log(auth)

  return auth ? <>{children}</> : <Navigate to="/login" />;
}
export default PrivateRoute
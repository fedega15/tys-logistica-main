import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? <>{children}</> : <Navigate to="/login" />;
}
export default PrivateRoute
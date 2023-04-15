import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { auth } = useAuth();
  console.log(auth.auth);
  return auth.auth ? <>{children}</> : <Navigate to="/login" />;
}
export default PrivateRoute;

// falta terminar. porque cuandor refresco la pagina no se mantiene el contexto por mas q no haya vencido el token

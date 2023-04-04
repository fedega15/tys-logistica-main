import { Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
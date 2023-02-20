import React from "react";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const isLoggedIn = true;
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;

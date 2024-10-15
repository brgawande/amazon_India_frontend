import React from "react";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, isLoggedIn }) => {
  return isLoggedIn ? <Element /> : <Navigate to={"/register"} />;
};

export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ element: Element, isLoggedIn }) => {
  return !isLoggedIn ? <Element /> : <Navigate to={"/"} />;
};

export default PublicRoute;

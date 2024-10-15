import React from "react";
import Cookies from "js-cookie";

const isUserAuthenticated = () => {
  const token = Cookies.get("token");
  return !!token; // Return true if token exists, false otherwise
};

export default isUserAuthenticated;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = window.localStorage.getItem("token");
  console.log(token)
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

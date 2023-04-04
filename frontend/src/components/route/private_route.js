import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from "../../App";

const PrivateRoute = ({ path, element }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return isLoggedIn ? <Route path={path} element={element} /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
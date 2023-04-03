import React from "react";
import Sidebar from "./components/common/Sidebar";
import Nav from "./components/common/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
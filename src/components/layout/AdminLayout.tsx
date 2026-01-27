import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <h1>THis is admin layout.</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;

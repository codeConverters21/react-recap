import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="d-flex flex-column">
      {/* //* absolute path */}
      {/* <NavLink to="/dashboard/profile">Profile</NavLink> */}
      {/* //* relative path */}
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <Outlet />
    </div>
  );
};

export default Dashboard;

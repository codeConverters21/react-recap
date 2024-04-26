import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="d-flex flex-column">
      <NavLink to="/dashboard/profile">Profile</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
    </div>
  );
};

export default Dashboard;

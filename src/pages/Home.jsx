import React from "react";
import { useAuthContext } from "../context/AuthProvider";

const Home = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome user: {user} </h2>
    </div>
  );
};

export default Home;

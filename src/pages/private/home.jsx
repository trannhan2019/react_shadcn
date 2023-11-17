import React from "react";
import { useAuthStore } from "@/stores/auth-store";

const Home = () => {
  const { user, isLoggedIn } = useAuthStore();
  return (
    <div>
      <h3>{user.username}</h3>
      <p>{isLoggedIn && "Da login"}</p>
    </div>
  );
};

export default Home;

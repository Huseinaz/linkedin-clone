import React from "react";
import "./style.css";

import Header from "./components/Header";
import Profile from "./components/Profile";

const Home = () => {
  return(
    <div>
      <Header />
      <div className="main">
        <Profile />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./style.css";

import Header from "./components/Header";
import Post from "./components/Post";

const Home = () => {
  return(
    <div>
      <Header />
      <div className="main">
        <Post />
      </div>
    </div>
  );
};

export default Home;

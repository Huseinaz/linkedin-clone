import React from "react";
import "./style.css";

import Header from "./components/Header";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";

const Home = () => {
  return(
    <div>
      <Header />
      <div className="main">
        <AddPost />
        <Posts />
      </div>
    </div>
  );
};

export default Home;

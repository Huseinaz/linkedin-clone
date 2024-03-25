import React from "react";
import "./style.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";

const Home = () => {
  return(
    <div>
      <Header />
      <div className="main">
        <Jobs />
      </div>
    </div>
  );
};

export default Home;

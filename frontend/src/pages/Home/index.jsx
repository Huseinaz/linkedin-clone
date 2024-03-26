import React, { useState } from "react";
import "./style.css";

import Header from "./components/Header";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import axios from "axios";

const Home = () => {
  
  const [post, setpost] = useState([]);

  const loadPosts = async () => {
    const response = await axios.get("http://localhost/linkedin-clone/backend/get_post.php");

    setpost(response.data);

    localStorage.setItem("post", JSON.stringify(response.data));
  };

  return(
    <div>
      <Header />
      <div className="main">
        <AddPost />
        <div className="main">
        {post.map((post) => {
        return <Posts post={post} key={post.id} />;
      })}
      </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "./style.css";

import Header from "./components/Header";
import Jobs from "./components/Jobs";
import axios from "axios";

const Home = () => {

  const [job, setJob] = useState([]);

  const loadJobs = async () => {
    const response = await axios.get("http://localhost/linkedin-clone/backend/get_job.php");

    setJob(response.data);

    localStorage.setItem("job", JSON.stringify(response.data));
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return(
    <div>
      <Header />
      <div className="main">
        {job.map((job) => {
        return <Jobs job={job} key={job.id} />;
      })}
      </div>
    </div>
  );
};

export default Home;

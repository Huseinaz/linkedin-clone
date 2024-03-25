import "./styles/utilities.css";
import "./styles/colors.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication/index";
import Register from "./pages/Authentication/Register";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Jobs" element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

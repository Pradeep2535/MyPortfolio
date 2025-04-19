import React from "react";
import NavBar from "./components/NavBar/NavBar";

import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import "../src/App.css";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience.jsx";
import Achievements from "./pages/Achievements/Achievements.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";

import { useState } from "react";
import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  const [lineBorder, setLineBorder] = useState("home");
  const [showLoader, setShowLoader] = useState(false);
  return (
    <div>
      <Loader show={showLoader} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              lineBorder={lineBorder}
              setLineBorder={setLineBorder}
              setShowLoader={setShowLoader}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              lineBorder={lineBorder}
              setLineBorder={setLineBorder}
              setShowLoader={setShowLoader}
            />
          }
        />
        <Route
          path="/skills"
          element={
            <Skills
              lineBorder={lineBorder}
              setLineBorder={setLineBorder}
              setShowLoader={setShowLoader}
            />
          }
        />
        <Route
          path="/experience"
          element={
            <Experience
              lineBorder={lineBorder}
              setLineBorder={setLineBorder}
              setShowLoader={setShowLoader}
            />
          }
        />
        <Route
          path="/achievements"
          element={
            <Achievements
              lineBorder={lineBorder}
              setLineBorder={setLineBorder}
              setShowLoader={setShowLoader}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactUs
              lineBorder={lineBorder}
              setLineBorder={setLineBorder}
              setShowLoader={setShowLoader}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

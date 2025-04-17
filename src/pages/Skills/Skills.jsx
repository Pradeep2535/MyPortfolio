import React from "react";
import "./Skills.css";
import { home } from "../../assets/assets.js";
import ProgrammingSkills from "../../components/ProgrammingSkills/ProgrammingSkills.jsx";
import FrameWorks from "../../components/FrameWorks/FrameWorks.jsx";
import Tools from "../../components/Tools/Tools.jsx";
import Languages from "../../components/Languages/Languages.jsx";
import Leadership from "../../components/Leadership/Leadership.jsx";
import Certifications from "../../components/Certifications/Certifications.jsx";
import SecondNavBar from "../../components/SecondNavBar/SecondNavBar.jsx";

const Skills = ({ lineBorder, setLineBorder, setShowLoader }) => {
  const nptel = [
    {
      name: "Python for Data Science",
      recognition: "National Level 1% Topper",
      image: home.python_data,
    },
    {
      name: "Data Science for Engineers",
      recognition: "National Level 5% Topper",
      image: home.data_science,
    },
    {
      name: "Design & Implementation of Human-Computer",
      recognition: "National Level 5% Topper",
      image: home.data_science,
    },
  ];

  const udemy = [
    {
      name: "Data Science BootCamp",
      image: home.datascience_bootcamp,
    },
    {
      name: "Mega Full Stack Web Development",
      image: home.mega,
    },
    {
      name: "Flutter Advanced Course",
      image: home.flutter_advanced,
    },
    {
      name: "Flutter UI BootCamp",
      image: home.flutter_ui,
    },

    {
      name: "Mastering Cloud Architecture",
      image: home.cloud,
    },
    {
      name: "AI and ChatGPT for beginners",
      image: home.ai_and_chatgpt,
    },
    {
      name: "Fake News with ML",
      image: home.fake_news,
    },
    {
      name: "Unity Engine Tutorial",
      image: home.unity,
    },
    {
      name: "Master Python using ChatGPT",
      image: home.master_python,
    },
  ];
  return (
    <div>
      <SecondNavBar
        lineBorder={lineBorder}
        setLineBorder={setLineBorder}
        setShowLoader={setShowLoader}
      />
      <h2>Technical Skills</h2>
      <div className="container-1">
        <ProgrammingSkills />
        <FrameWorks />
      </div>
      <div className="container-2">
        <Tools />
      </div>
      <h2>Soft Skills</h2>
      <div className="container-1">
        <Languages />
        <Leadership />
      </div>
      <div className="Certifications">
        <Certifications name="NPTEL Certifications" list={nptel} />
        <Certifications name="UDEMY Certifications" list={udemy} />
      </div>
    </div>
  );
};

export default Skills;

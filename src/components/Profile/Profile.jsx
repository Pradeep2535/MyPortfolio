import React from "react";
import "../Profile/Profile.jsx";
import "../Profile/Profile.css";
import { home } from "../../assets/assets.js";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoEye } from "react-icons/io5";

const Profile = () => {
  const redirectLinks = (link) => {
    if (link == "Linkedin")
      window.open = "https://linkedin.com/in/pradeeptechno";
    else if (link == "Github") window.open = "https://github.com/Pradeep2535";
    else if (link == "SkillRack")
      window.open =
        "https://www.skillrack.com/faces/resume.xhtml?id=402924&key=61cf21362731b75014e9bfa62ec7f79558253550";
    else if (link == "LeetCode")
      window.open = "https://leetcode.com/u/pradeep_eng/";
    else if (link == "Geeks")
      window.open = "https://www.geeksforgeeks.org/user/pradeepehss5/";
  };
  return (
    <div className="profile">
      <div className="left-half">
        <div className="profile-role">AI & Full Stack Enthusiast</div>
        <div className="greeting">Hello I'm</div>
        <div className="name">Pradeep S</div>
        <div className="about">
          Passionate tech enthusiast with a strong foundation in AI, web, and
          app development. Skilled in API integration, full-stack development,
          and AI-driven applications, with expertise in LLMs and GenerativeAI.
          <br />A regular hackathon winner, recognized for problem-solving,
          innovation, and teamwork. <br />Strong leadership skills, eager to explore
          emerging technologies, and committed to continuous learning.
        </div>
        <div className="download">
          <div className="resume">
            <button onClick={() => window.open("https://drive.google.com/file/d/1tHiEhR_m4dlvMHAYbpjK0S1jMpg9p21m/view?usp=drivesdk")}>
              View Resume{" "}
              <IoEye className="download-resume" />
            </button>
          </div>
          <div className="profile-icons">
            <div className="more-info" style={{color:"#D2B48C"}}>Explore me on <span style={{marginLeft:"5px"}}>➤</span></div>
            <SiLinkedin
              size="18px"
              color="#D2B48C"
              onClick={() =>
                window.open("https://linkedin.com/in/pradeeptechno")
              }
            />
            <ImGithub
              size="19px"
              color="#D2B48C"
              onClick={() => window.open("https://github.com/Pradeep2535")}
            />
            <SiLeetcode
              size="20px"
              color="#D2B48C"
              onClick={() => window.open("https://leetcode.com/u/pradeep_eng/")}
            />
            <SiGeeksforgeeks
              size="23px"
              color="#D2B48C"
              onClick={() =>
                window.open("https://www.geeksforgeeks.org/user/pradeepehss5/")
              }
            />
            <FaCode
              size="21px"
              color="#D2B48C"
              onClick={() =>
                window.open(
                  "https://www.skillrack.com/faces/resume.xhtml?id=402924&key=61cf21362731b75014e9bfa62ec7f79558253550"
                )
              }
            />
          </div>
        </div>
      </div>

      {/* <div className="right-half">
        
        <div className="image">
          <img  src={home.profileImage} alt="" />
        </div> */}

      {/* </div> */}
      <div className="right-half">
        <div className="image-container">
          <svg
            className="dotted-border"
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="110"
              cy="110"
              r="105"
              fill="none"
              stroke="#50efaf"
              strokeWidth="3"
              strokeDasharray="10 10 30 35 10 10 30 10 30 35"
            />
          </svg>
          <img className="image" src={home.profile_2} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import "./SecondNavBar.css";
import { useNavigate } from "react-router-dom"; // Use 'useNavigate' for navigation

const SecondNavBar = ({ lineBorder, setLineBorder, setShowLoader }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavClick = (route, section) => {
    setShowLoader(true); // Show loader
    setTimeout(() => {
      setLineBorder(section); // Update active section
      navigate(route); // Navigate to the route
      setShowLoader(false); // Hide loader after timeout
    }, 1000); // 1-second delay for loader
  };

  return (
    <div className="second-navbar">
      <div className="navbar-left">
        <ul>
          <li
            onClick={() => handleNavClick("/", "home")}
            className={lineBorder === "home" ? "active" : ""}
          >
            Home
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li
            onClick={() => handleNavClick("/projects", "Projects")}
            className={lineBorder === "Projects" ? "active" : ""}
          >
            Projects
          </li>
          <li
            onClick={() => handleNavClick("/skills", "Skills")}
            className={lineBorder === "Skills" ? "active" : ""}
          >
            Skills & Certifications
          </li>
          <li
            onClick={() => handleNavClick("/experience", "Experience")}
            className={lineBorder === "Experience" ? "active" : ""}
          >
            Experience
          </li>
          <li
            onClick={() => handleNavClick("/achievements", "Achievements")}
            className={lineBorder === "Achievements" ? "active" : ""}
          >
            Achievements
          </li>
          <li
            onClick={() => handleNavClick("/contact", "Contact")}
            className={lineBorder === "Contact" ? "active" : ""}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="hire-me">
        <button>Hire Me</button>
      </div>
    </div>
  );
};

export default SecondNavBar;

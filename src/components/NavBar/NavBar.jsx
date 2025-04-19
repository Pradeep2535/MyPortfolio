import React, { useState, useEffect, useRef } from "react";
import "../NavBar/NavBar.css";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ lineBorder, setLineBorder, setShowLoader }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const iconRef = useRef(null);

  const handleNavClick = (route, section) => {
    setShowLoader(true);
    setMobileOpen(false); // Close mobile menu after selection
    setTimeout(() => {
      setLineBorder(section);
      navigate(route);
      setShowLoader(false);
    }, 1000);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <div className="navbar">
      {/* Desktop Left */}
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

      {/* Desktop Right */}
      <div className="navbar-right">
        <ul>
          <li onClick={() => handleNavClick("/projects", "Projects")} className={lineBorder === "Projects" ? "active" : ""}>Projects</li>
          <li onClick={() => handleNavClick("/skills", "Skills")} className={lineBorder === "Skills" ? "active" : ""}>Skills & Certifications</li>
          <li onClick={() => handleNavClick("/experience", "Experience")} className={lineBorder === "Experience" ? "active" : ""}>Experience</li>
          <li onClick={() => handleNavClick("/achievements", "Achievements")} className={lineBorder === "Achievements" ? "active" : ""}>Achievements</li>
          <li onClick={() => handleNavClick("/contact", "Contact")} className={lineBorder === "Contact" ? "active" : ""}>Contact</li>
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div
        className="mobile-menu-icon"
        onClick={() => setMobileOpen(!mobileOpen)}
        ref={iconRef}
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="mobile-dropdown" ref={dropdownRef}>
          <ul>
            <li onClick={() => handleNavClick("/", "home")}>Home</li>
            <li onClick={() => handleNavClick("/projects", "Projects")}>Projects</li>
            <li onClick={() => handleNavClick("/skills", "Skills")}>Skills & Certifications</li>
            <li onClick={() => handleNavClick("/experience", "Experience")}>Experience</li>
            <li onClick={() => handleNavClick("/achievements", "Achievements")}>Achievements</li>
            <li onClick={() => handleNavClick("/contact", "Contact")}>Contact</li>
          </ul>
        </div>
      )}

      {/* Desktop Hire Me Button */}
      <div className="hire-me">
        <button onClick={() => handleNavClick("/contact", "Contact")}>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import "./Languages.css";
import { home } from "../../assets/assets.js";

const Languages = () => {
  const languages = [
    { name: "Tamil (Fluent)", path: home.tamil },
    { name: "English (Fluent)", path: home.english },
    { name: "Hindi (Beginner)", path: home.hindi },
  ];

  return (
    <div className="language">
      <div className="heading">
        <h4>Communication Languages</h4>
      </div>

      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <div className="language-skills">
              <img src={language.path} alt="" />
              <p>{language.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;

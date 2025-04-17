import React from "react";
import { home } from "../../assets/assets.js";
import "./ProgrammingSkills.css";

const ProgrammingSkills = () => {
 
    const programmingSkills = [
      { name: "Python", path: home.python },
      { name: "Java", path: home.java },
      
      { name: "JavaScript", path: home.js },
      { name: "C", path: home.c },
      { name: "Dart", path: home.dart },
      { name: "MySQL", path: home.mysql },
    ];

    return (
      <div className="programming">
        <div className="heading">
          <h4>Programming Languages</h4>
        </div>

        <ul>
          {programmingSkills.map((programmingSkill, index) => (
            <li key={index}>
              <div className="prog-skills">
                <img src={programmingSkill.path} alt="" />
                <p>{programmingSkill.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ProgrammingSkills;

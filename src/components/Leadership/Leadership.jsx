import React from "react";
import "./Leadership.css";
import { home } from "../../assets/assets.js";

const Leadership = () => {
  const leadership = [
    { name: "Teamwork", path: home.teamwork },
    { name: "Leadership", path: home.leadership },
    { name: "Stakeholder Management", path: home.stakeholder },
  ];

  return (
    <div className="leadership">
      <div className="heading">
        <h4>Leadership & Collaboration</h4>
      </div>

      <ul>
        {leadership.map((leadership, index) => (
          <li key={index}>
            <div className="leadership-skills">
              <img src={leadership.path} alt="" />
              <p>{leadership.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leadership;

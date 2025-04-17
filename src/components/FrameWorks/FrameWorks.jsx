import React from "react";
import "./FrameWorks.css";
import { home } from "../../assets/assets.js";

const FrameWorks = () => {
  const frameworksSkills = [
    { name: "LangChain", path: home.langchain },
    { name: "LlamaIndex", path: home.llama },
    { name: "Node.js", path: home.nodejs },
    { name: "Express.js", path: home.expressjs },
    { name: "React.js", path: home.reactjs },
    { name: "Numpy", path: home.numpy },
    { name: "Pandas", path: home.pandas },
    { name: "Scipy", path: home.scipy },
  ];
  return (
    <div className="framework">
      <div className="heading">
        <h4>Frameworks & Libraries</h4>
      </div>

      <ul>
        {frameworksSkills.map((frameworksSkill, index) => (
          <li key={index}>
            <div className="frame-skills">
              <img src={frameworksSkill.path} alt="" />
              <p>{frameworksSkill.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrameWorks;

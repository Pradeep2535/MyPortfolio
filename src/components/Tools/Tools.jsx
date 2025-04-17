import "./Tools.css";
import React from "react";
import { home } from "../../assets/assets.js";


const Tools = () => {
  const tools = [
    { name: "Agentic AI", path: home.agenticai },
    { name: "LangGraph", path: home.langgraph },
    { name: "RAG", path: home.rag },
    { name: "HTML", path: home.html },
    { name: "CSS", path: home.css },

    { name: "PostgreSQL", path: home.postgresql },
    { name: "Flutter", path: home.flutter },
    { name: "MongoDB", path: home.mongodb },
    { name: "AWS", path: home.aws },
    { name: "Git", path: home.git },
    { name: "GitHub", path: home.github },
    { name: "OpenAI", path: home.openai },
    { name: "Gemini", path: home.gemini },
    { name: "Llama", path: home.llama_model },
    { name: "Olama", path: home.olama },
    
  ];

  return (
    <div className="tools">
      <div className="heading">
        <h4>Tools & Technologies</h4>
      </div>

      <ul>
        {tools.map((tool, index) => (
          <li key={index}>
            <div className="tool-skills">
              <img src={tool.path} alt="" />
              <p>{tool.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;

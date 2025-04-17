import React from "react";
import "./Certifications.css";
import { home } from "../../assets/assets.js";

const Certifications = ({list,name}) => {
  
    return (
    
    <div>
      <div className="achievements-section">
        <h2>{name}</h2>
        <div className="achievements-list">
          {list.map((item, index) => (
            <div className="achievement-card" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="achievement-image"
              />
              <p className="achievement-name">{item.name}</p>
              <p className="achievement-college">{item.recognition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

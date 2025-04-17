import React from "react";
import "./Loader.css";

const Loader = ({ show }) => {
  return (
    <div className={`loader-overlay ${show ? "" : "hidden"}`}>
      <div className="loader">
        <div className="loader__inner"></div>
        <div className="loader__orbit">
          <div className="loader__dot"></div>
          <div className="loader__dot"></div>
          <div className="loader__dot"></div>
          <div className="loader__dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

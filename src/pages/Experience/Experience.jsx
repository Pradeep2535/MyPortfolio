import React from "react";
import "./Experience.css";
import workIconImport from "./work.svg";
import schoolIconImport from "./school.svg";
import timelineElements from "./timelineElements.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SecondNavBar from "../../components/SecondNavBar/SecondNavBar.jsx";

const Experience = ({ lineBorder, setLineBorder, setShowLoader }) => {
  let workIconStyles = { background: "#06D6A0", color: "#fff" };
  let schoolIconStyles = { background: "#f9c74f", color: "#fff" };

  return (
    <div>
      <SecondNavBar
        lineBorder={lineBorder}
        setLineBorder={setLineBorder}
        setShowLoader={setShowLoader}
      />
      <div className="main">
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={
                  <div className="icon-wrapper">
                    <div className="rotating-border"></div>
                    <div className="fixed-icon">
                      <img
                        src={isWorkIcon ? workIconImport : schoolIconImport}
                        alt={`${isWorkIcon ? "work" : "school"} icon`}
                        className="icons"
                      />
                    </div>
                  </div>
                }
              >
                <h3 className="role">{element.title}</h3>
                <h5 className="subtitle">{element.location}</h5>
                <div className="description">
                  {element.description.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

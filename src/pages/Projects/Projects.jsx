import React from "react";
import "./Projects.css";
import AIProjects from "../../components/AIProjects/AIProjects";
import FSProjects from "../../components/FSProjects/FSProjects";
import SecondNavBar from "../../components/SecondNavBar/SecondNavBar";

const Projects = ({lineBorder,setLineBorder,setShowLoader}) => {
 
  return (
    <div>
      <SecondNavBar lineBorder={lineBorder} setLineBorder={setLineBorder} setShowLoader={setShowLoader}/>
      <h2 style={{marginTop : 0}}>AI Projects</h2>
      <AIProjects/>
      <h2 style={{marginTop : 0, paddingTop:10,marginBottom:20 ,paddingRight:20}}>Web & Mobile App Projects</h2>
      <FSProjects />
    </div>
  );
};

export default Projects;

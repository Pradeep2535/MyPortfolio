import React from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Profile from "../../components/Profile/Profile.jsx";
import CountSummary from "../../components/CountSummary/CountSummary.jsx";
import ParticlesElem from "../../components/Particles/Particles.jsx";

const Home = ({ lineBorder, setLineBorder, setShowLoader }) => {
  return (
    <div>
      <NavBar
        lineBorder={lineBorder}
        setLineBorder={setLineBorder}
        setShowLoader={setShowLoader}
      />
      <ParticlesElem />
      <Profile />
      <CountSummary />
    </div>
  );
};

export default Home;

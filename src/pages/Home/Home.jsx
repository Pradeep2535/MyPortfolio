import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Profile from "../../components/Profile/Profile";
import CountSummary from "../../components/CountSummary/CountSummary";

const Home = ({ lineBorder, setLineBorder, setShowLoader }) => {
  return (
    <div>
      <NavBar
        lineBorder={lineBorder}
        setLineBorder={setLineBorder}
        setShowLoader={setShowLoader}
      />
      <Profile />
      <CountSummary />
    </div>
  );
};

export default Home;

import React from "react";
import "./Achievements.css";
import { home } from "../../assets/assets.js";
import SecondNavBar from "../../components/SecondNavBar/SecondNavBar.jsx";
const Achievements = ({ lineBorder, setLineBorder, setShowLoader }) => {
  const list = [
    {
      name: "Winner",
      college: "B.S. Abdur Rahman Crescent Institute of Science and Technology",
      image: home.crescent,
    },
    {
      name: "Runner-up",
      college: "Chennai Institue of Technology",
      image: home.cit,
    },
    {
      name: "Runner-up",
      college: "Dhanalakshmi College of Engineering",
      image: home.dhanalakshmi,
    },
    {
      name: "Second Runner-up",
      college: "Chennai Institue of Technology",
      image: home.cit2,
    },
    {
      name: "Second Runner-up",
      college: "St.Joseph's College of Engineering",
      image: home.joseph,
    },

    {
      name: "Second Runner-up",
      college: "Sri Sairam Engineering College",
      image: home.saiCode1,
    },
    {
      name: "Second Runner-up",
      college: "Sri Sairam Engineering College",
      image: home.saiCode2,
    },
  ];

  const hackathons = [
    {
      name: "Second Runner-up",
      college: "IIT Madras",
      image: home.iit,
    },
    {
      name: "Winner",
      college: "CEG Campus, Anna University",
      image: home.ceg,
    },
    {
      name: "Winner",
      college: "KCG College of Technology",
      image: home.kcg,
    },

    {
      name: "Runner",
      college: "MakersTribe, IITM Reasearch Park",
      image: home.mtu,
    },
    {
      name: "Runner",
      college: "Sri Sairam Engineering College",
      image: home.innovathon,
    },
    {
      name: "Runner",
      college: "Sri Sairam Engineering College",
      image: home.solveathon,
    },
    {
      name: "Runner",
      college: "Sri Sairam Engineering College",
      image: home.genesis,
    },
  ];

  const awards = [
    {
      name: "Best Student Performer in 2nd year",
      college: "Sri Sairam Engineering College",
      image: home.award1,
    },
    {
      name: "Best Student Performer in 3rd year",
      college: "Sri Sairam Engineering College",
      image: home.award2,
    },
    {
      name: "Selected among the Top 10 students to represent my college at IIT Madras for the PALS event.",
      college: "",
      image: home.pals,
    },
  ];

  const others = [
    {
      name: "Technical Quiz",
      college: "Dhanalakshmi College Of Engineering",
      image: home.dhanalakshmi_quiz,
    },
    {
      name: "Echo Fest (Speech Competition)",
      college: "Sri Sairam Engineering College",
      image: home.admad,
    },
    {
      name: "SDG Ideathon",
      college: "Sri Sairam Engineering College",
      image: home.ideathon,
    },
    {
      name: "UBA Ideathon",
      college: "Sri Sairam Engineering College",
      image: home.uba,
    },
    {
      name: "Poster Presentation",
      college: "Sri Sairam Engineering College",
      image: home.poster,
    },
    {
      name: "BidWars",
      college: "Sri Sairam Engineering College",
      image: home.bidwars,
    },
    {
      name: "Technical Bidding",
      college: "Sri Sairam Engineering College",
      image: home.bidding,
    },
    {
      name: "AdZap",
      college: "Sri Sairam Engineering College",
      image: home.admad,
    },
  ];

  const volunteering = [
    {
      name: "Chairperson, AIRO 4.0 (Symposium)",
      college: "Sri Sairam Engineering College",
      image: home.airo1,
    },
    {
      name: "Team Lead, Model United Nations",
      college: "Sri Sairam Engineering College",
      image: home.mun,
    },
    {
      name: "Volunteer, Math Fest",
      college: "Sri Sairam Engineering College",
      image: home.mathfest,
    },

    {
      name: "Volunteer, NSS",
      college: "Sri Sairam Engineering College",
      image: home.drugNss,
    },
  ];
  return (
    <div>
      <SecondNavBar
        lineBorder={lineBorder}
        setLineBorder={setLineBorder}
        setShowLoader={setShowLoader}
      />
      <div className="mainContainer">
        <div className="achievements-section-1">
          <h2>Coding Events Won</h2>
          <div className="achievements-list">
            {list.map((item, index) => (
              <div className="achievement-card" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="achievement-image"
                />
                <p className="achievement-name">{item.name}</p>
                <p className="achievement-college">{item.college}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="achievements-section">
          <h2>Hackathons Won</h2>
          <div className="achievements-list">
            {hackathons.map((item, index) => (
              <div className="achievement-card" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="achievement-image"
                />
                <p className="achievement-name">{item.name}</p>
                <p className="achievement-college">{item.college}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2>Awards</h2>
          <div className="achievements-list">
            {awards.map((item, index) => (
              <div className="achievement-card" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="achievement-image"
                />
                <p className="achievement-name">{item.name}</p>
                <p className="achievement-college">{item.college}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="achievements-section">
          <h2>Other events Won</h2>
          <div className="achievements-list">
            {others.map((item, index) => (
              <div className="achievement-card" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="achievement-image"
                />
                <p className="achievement-name">{item.name}</p>
                <p className="achievement-college">{item.college}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2>Volunteering & Leadership</h2>
          <div className="achievements-list">
            {volunteering.map((item, index) => (
              <div className="achievement-card" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="achievement-image"
                />
                <p className="achievement-name">{item.name}</p>
                <p className="achievement-college">{item.college}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

import React from "react";
import { home } from "../../assets/assets.js";
import "./FSProjects.css";

const FSProjects = () => {
  const aiProjectList = [
    {
      title: "FoodiFy",
      img: home.foodify,
      description:
        "Developed a MERN stack food delivery platform with a user-friendly interface, real-time admin panel for menu management, and Stripe integration for secure payments. Optimized performance with RESTful APIs and Agile methodologies for a seamless experience.",
      skills: ["ReactJS", "MongoDB", "NodeJS", "ExpressJS"],
    },
    {
      title: "AR Bites",
      img: home.arbites,
      description:
        "This project introduces QR-code scanned AR menus, allowing customers to view 3D food models, check details, and place orders seamlessly. A smart voice and bill-printing device automates kitchen notifications, enhancing efficiency. This contactless, immersive system modernizes dining for both customers and restaurants. ",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "ThreeJS",
        "Git",
        "GitHub Deployement",
      ],
    },
    {
      title: "CareLink",
      img: home.carelink,
      description:
        "Flutter-based mobile app designed to seamlessly connect patients with nurses and home caretakers for personalized healthcare services. Post-surgery care, elderly support, or in-home medical assistance, the app provides a simple and efficient way to find, book, and communicate with qualified caregivers.",
      skills: [
        "Flutter",
        "State Management",
        "UI/UX",
        "Frontend Integration",
        "MongoDB",
        "PlayStore Release",
      ],
    },
    {
      title: "CareWise",
      img: home.carewise,
      description:
        "Flutter-based mobile app designed to educate, train, and certify home caretakers to provide professional and compassionate care. The app offers interactive learning modules, and certification programs to help aspiring caregivers develop essential skills in elderly care, post-surgery support and patient hygiene.",
      skills: [
        "Flutter",
        "UI/UX",
        "Frontend Integration",
        "Git",
        "GitHub",
        "PlayStore Release",
        "State Management",
      ],
    },
    {
      title: "GrowSpare",
      img: home.growspare,
      description:
        "MicroInvest is a platform designed to help users start investing effortlessly through micro-investments and AI-powered financial insights. It enables users to round up spare change from transactions, track their portfolios, assess risks, and receive personalized investment recommendations.",
      skills: [
        "Flutter",
        "UI/UX",
        "Git",
        "GitHub",
        "Yahoo Finance API",
        "MongoDB",
      ],
    },
    {
      title: "RescueBite",
      img: home.rescuebite,
      description:
        "Developed the Flutter-based frontend for a food waste management app, enabling seamless user interaction. Designed intuitive interfaces for food donation, discounted near-expiry sales, and NGO coordination. Integrated gamification features like a leaderboard to enhance user engagement.",
      skills: ["Flutter", "UI/UX", "Frontend Integration"],
    },
    {
      title: "ChatChamp",
      img: home.rescuebite,
      description:
        "ChatChamp is an interactive Flutter-based AI assistant that enables users to generate both text and images seamlessly. Integrated with Gemini API for natural language conversations and DALL-E API for AI-generated images, the app provides a versatile experience for creativity, and assistance.",
      skills: ["Flutter", "UI/UX", "OpenAI Text Model", "DALL-E Model"],
    },
    {
      title: "SkyCast",
      img: home.skycast,
      description:
        "Developed a Flutter-based weather app that provides real-time weather updates using the WeatherAPI. The app displays current temperature, humidity, wind speed, and forecasts with an intuitive and responsive UI. Features include location-based weather tracking, search functionality for different cities, and dynamic weather illustrations for an engaging user experience.",
      skills: ["Flutter", "UI/UX", "Weather API"],
    },
    {
      title: "AIRO 4.0 - Department's Symposium Website",
      img: home.airo,
      description:
        "AIRO is a dynamic Avengers-themed symposium website designed to deliver an immersive experience with stunning animations, interactive videos, and a seamless registration system. Inspired by the Marvel universe, the website features a heroic UI that captivates users while providing essential event details like schedules, speaker information, and updates.",
      skills: ["HTML & CSS", "JavaScript", "Git", "GitHub Deployement"],
    },
  ];

  return (
    <div className="ai-projects">
      <div className="scroll-bar">
        <ul>
          {aiProjectList.map((project, index) => (
            <li>
              <div className="blob">
                <div className="fs-projects-container">
                  <img src={project.img} alt="" />
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="skills">
                    <ul>
                      {project.skills.map((indvidualSkill, index) => (
                        <li>
                          <div className="skill">
                            <h6>{indvidualSkill}</h6>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FSProjects;

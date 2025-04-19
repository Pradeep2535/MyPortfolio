import React from "react";
import { home } from "../../assets/assets.js";
import "./AIProjects.css";

const AIProjects = () => {
  const aiProjectList = [
    {
      title: "ShopGenie",
      img: home.sheetbot,
      description:
        "LangGraph‑powered AI agent that executes natural‑language spreadsheet prompts—from basic fill, sort, swap, delete, etc... to complex operations—without formulas or menus. A chat‑style interface to both routine and advanced data tasks with AgenticAI.",
        skills : [
          "Agentic AI",
          "LangGraph",
          "Python REPL execution",
          "Prompt engineering",
      
          "Human-in-the-loop",
          
      ]
    },
    {
      title: "ShopGenie",
      img: home.shopgenie,
      description:
        "This Streamlit app transforms e-commerce with AI, RAG for smarter product search. Key features include image search, interactive Chatbot, and high-accuracy results powered by the Amazon Product Dataset, Pinecone VectorDB, and MongoDB—simplifying user decisions.",
      skills: [
        "Streamlit",
        "MongoDB",
        "PineConeDB",
        "RAG",
        "Flask",
        "LangChain",
        "API Integration & Management",
      ],
    },
    {
      title: "DocFlow.ai",
      img: home.docflow,
      description:
        "Automated financial document processing with Tesseract OCR for data extraction, MongoDB for storage, and Google Drive for cloud organization. Features include a dashboard for tracking, analytics, and a chatbot for instant retreival, enhancing efficiency.",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "TesseractOCR",
        "GDrive",
        "MongoDB",
        "PineConeDB",
        "RAG",
        "Flask",
        "LangChain",
      ],
    },
    {
      title: "FeedbackLens",
      img: home.feedbacklens,
      description:
        "This Gradio-based app extracts key insights from feedback sheets, visualizing data with pie and bar charts. It generates an automated PDF report with donut charts for key parameters, helping teams efficiently manage feedback and gain actionable insights.",
      skills: ["Gradio", "PyPDF", "GenAI", "Flask", "Gemini API", "Python"],
    },
    {
      title: "HireFit",
      img: home.hirefit,
      description:
        "ATS Resume Expert streamlines job applications by analyzing resumes against job descriptions, providing a match percentage, keyword insights, and actionable recommendations. It helps job seekers enhance their resumes, making them more ATS-friendly and increasing their chances of landing interviews.",
      skills: ["Streamlit", "LangChain", "OpenAI API", "Output Parsers"],
    },
    {
      title: "BioCraft.ai",
      img: home.biocraft,
      description:
        "A Flask web app that generates personalized bios based on user preferences like career goals and interests. Powered by Gemini API’s Structured Prompt and hosted on Vercel, it ensures dynamic content, and showcases expertise in web development and API integration.",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "LangChain",
        "Output Parsers",
        "LLM (Gemini model)",
        "API Integration & Management",
      ],
    },
    {
      title: "CineMatch",
      img: home.cinematch,
      description:
        "A Machine Learning and Streamlit-based app utilizing cosine similarity to deliver personalized movie recommendations based on user preferences. It ensures a seamless experience, helping users effortlessly discover films that match their tastes without endless searching.",
      skills: [
        "Streamlit",
        "Movies Dataset API",
        "Cosine Similarity",
        "Feature Engineering",
        "Machine Learning",
      ],
    },
  ];

  return (
    <div className="ai-projects">
      <div className="scroll-bar">
        <ul>
          {aiProjectList.map((project, index) => (
            <li>
              <div className="ai-projects-container">
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIProjects;

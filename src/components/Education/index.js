import React from "react";
import "./index.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationList = [
    {
      degree: "Industry Ready Certification in Full-Stack Development",
      institute: "Nxtwave Disruptive Technologies",
      year: "2024 - 2025",
    },
    {
      degree: "Bachelor of Computer Application",
      institute: "University of Calicut",
      year: "2020 - 2023",
    },
    {
      degree: "Intermediate, Computer Science",
      institute: "Govt Hss Puthur, Kozhikode",
      year: "2017 - 2019",
    }
  ];

  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="timeline">
        {educationList.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <span>{edu.institute} | {edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

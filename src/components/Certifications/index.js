import React from "react";
import "./index.css";
import { FaFileAlt } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Development (MERN) Specialization",
      platform: "NxtWave",
      year: "2025",
      link: "https://certificates.ccbp.in/intensive/irc?id=M465XYSQ3F"
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>
      <div className="cert-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <FaFileAlt className="cert-icon" />
            <h3>{cert.title}</h3>
            <span>{cert.platform} | {cert.year}</span>
            <a href={cert.link} target="_blank" rel="noreferrer" className="cert-btn">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
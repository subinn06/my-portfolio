import React from "react";
import "./index.css";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <h2>My Resume</h2>
      <p>
        You can download my full resume to see my experience, skills, education,
        certifications, and projects in detail
      </p>
      <a href="https://drive.google.com/file/d/17JdSSzQ3B-NI_zQkf_u6z4pleTJdXiOo/view?usp=sharing" target="_blank" rel="noreferrer" className="download-btn"><FaDownload /> Download Resume</a>
    </section>
  );
}

export default Resume;
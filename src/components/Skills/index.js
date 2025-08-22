import React from "react";
import "./index.css";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiBootstrap, SiJavascript, SiNodedotjs, SiMongodb, SiGit } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
    { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="skill-icon bootstrap" /> },
    { name: "JavaScript", icon: <SiJavascript className="skill-icon js" /> },
    { name: "React", icon: <FaReact className="skill-icon react" /> },
    { name: "Node.js", icon: <SiNodedotjs className="skill-icon node" /> },
    { name: "MongoDB", icon: <SiMongodb className="skill-icon mongodb" /> },
    { name: "Git", icon: <SiGit className="skill-icon git" /> },
    { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Tech Stack</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
import React from "react";
import "./index.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Insta Share",
      description: "Built an Instagram like app with login, posts, and user profile pages",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://res.cloudinary.com/dweegsaas/image/upload/v1755778030/Screenshot_2025-08-21_172658_rkla6e.png",
      live: "https://instasharesubin.ccbp.tech",
      github: "https://github.com/subinn06/InstaShare-Clone.git"
    },
    {
      title: "Nxt Trendz",
      description: "Developed ecommerce app with login, product list, and details pages",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://res.cloudinary.com/dweegsaas/image/upload/v1755778123/Screenshot_2025-08-21_173825_ikxoy1.png",
      live: "https://nxttrendzsubin.ccbp.tech",
      github: "https://github.com/subinn06/NxtTrendz.git"
    },
    {
      title: "Jobby App",
      description: "Built a job searching app with login, jobs and other details",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://res.cloudinary.com/dweegsaas/image/upload/v1755778221/Screenshot_2025-08-21_174004_ukqfs5.png",
      live: "https://subijobsapp.ccbp.tech",
      github: "https://github.com/subinn06/Jobby-App.git"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
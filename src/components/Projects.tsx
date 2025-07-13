import React from "react";
import resumeData from "../data/resume.json";

const Projects: React.FC = () => {
  return (
    <section className="projects mb-5">
      <h2 className="h5 fw-bold text-dark mb-3 position-relative">
        Projects
        <div
          className="position-absolute bottom-0 start-0 bg-primary"
          style={{ height: "3px", width: "40px" }}
        ></div>
      </h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="project-item mb-3 p-3 bg-light rounded">
          <h3 className="h6 fw-bold mb-2">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary"
              >
                {project.title}{" "}
                <i className="bi bi-box-arrow-up-right ms-1"></i>
              </a>
            ) : (
              <span className="text-dark">{project.title}</span>
            )}
          </h3>
          <p className="text-dark mb-0 small">{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;

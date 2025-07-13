import React from "react";
import resumeData from "../data/resume.json";

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="project">
          <h3>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;

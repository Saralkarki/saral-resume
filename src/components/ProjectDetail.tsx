import React from "react";
import { Link, useParams } from "react-router-dom";
import resumeData from "../data/resume.json";

interface Project {
  slug: string;
  title: string;
  projectLink: string;
  details: {
    problem: string;
    approach: string[];
    outcomes: string[];
    techStack: string[];
  };
}

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = resumeData.projects.find(
    (p) => (p as Project).slug === slug
  ) as Project | undefined;

  if (!project) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center min-vh-100"
        style={{ background: "#f5f5f5", padding: "48px" }}
      >
        <h1 className="h3 fw-bold text-dark mb-3">Project not found</h1>
        <Link to="/" className="text-primary text-decoration-none">
          ← Back to Resume
        </Link>
      </div>
    );
  }

  return (
    <div className="d-print-none" style={{ background: "#f5f5f5", minHeight: "100vh", padding: "56px 48px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Back link */}
        <Link
          to="/"
          className="text-primary text-decoration-none mb-4 d-inline-block small"
        >
          ← Back to Resume
        </Link>

        {/* Title and Project Link */}
        <h1 className="h3 fw-bold text-dark mb-2">{project.title}</h1>
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-decoration-none small mb-4 d-inline-block"
        >
          Project Link <i className="bi bi-box-arrow-up-right ms-1"></i>
        </a>

        {/* Problem Section */}
        <section className="mb-5">
          <h2 className="h5 fw-bold text-dark mb-3 position-relative">
            Problem
            <div
              className="position-absolute bottom-0 start-0 bg-primary"
              style={{ height: "3px", width: "40px" }}
            ></div>
          </h2>
          <p className="text-dark">{project.details.problem}</p>
        </section>

        {/* Approach Section */}
        <section className="mb-5">
          <h2 className="h5 fw-bold text-dark mb-3 position-relative">
            Approach
            <div
              className="position-absolute bottom-0 start-0 bg-primary"
              style={{ height: "3px", width: "40px" }}
            ></div>
          </h2>
          <ul className="text-dark mb-0">
            {project.details.approach.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ul>
        </section>

        {/* Outcomes Section */}
        <section className="mb-5">
          <h2 className="h5 fw-bold text-dark mb-3 position-relative">
            Outcomes
            <div
              className="position-absolute bottom-0 start-0 bg-primary"
              style={{ height: "3px", width: "40px" }}
            ></div>
          </h2>
          <ul className="text-dark mb-0">
            {project.details.outcomes.map((outcome, index) => (
              <li key={index} className="mb-2">
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-5">
          <h2 className="h5 fw-bold text-dark mb-3 position-relative">
            Tech Stack
            <div
              className="position-absolute bottom-0 start-0 bg-primary"
              style={{ height: "3px", width: "40px" }}
            ></div>
          </h2>
          <div className="d-flex flex-wrap gap-2">
            {project.details.techStack.map((tech, index) => (
              <span
                key={index}
                className="badge bg-light text-dark border border-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Back link at bottom */}
        <hr className="my-5" />
        <Link
          to="/"
          className="text-primary text-decoration-none small"
        >
          ← Back to Resume
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;

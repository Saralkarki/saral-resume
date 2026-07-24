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

  // Flowchart SVG for wheat disease monitoring
  const WheatDiseaseFlowchart = () => (
    <svg viewBox="0 0 600 700" style={{ width: "100%", maxWidth: "500px", marginTop: "1.5rem" }}>
      {/* Define arrow markers */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#6c757d" />
        </marker>
      </defs>

      {/* Stage 1: Search */}
      <rect x="50" y="20" width="500" height="80" fill="#e7f3ff" stroke="#0066cc" strokeWidth="2" rx="4" />
      <text x="300" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0066cc">
        Google CSE API
      </text>
      <text x="300" y="70" textAnchor="middle" fontSize="12" fill="#333">
        Search wheat disease keywords (2x daily)
      </text>
      <text x="300" y="85" textAnchor="middle" fontSize="11" fill="#666">
        Filter: popular publishers, no research papers
      </text>

      {/* Arrow */}
      <line x1="300" y1="100" x2="300" y2="125" stroke="#6c757d" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Stage 2: URL Staging */}
      <rect x="50" y="125" width="500" height="80" fill="#fff3cd" stroke="#ff9800" strokeWidth="2" rx="4" />
      <text x="300" y="155" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ff9800">
        URL List Table (SQLite)
      </text>
      <text x="300" y="175" textAnchor="middle" fontSize="12" fill="#333">
        Store URLs + check status (HTTP 200)
      </text>
      <text x="300" y="190" textAnchor="middle" fontSize="11" fill="#666">
        Filter dead links upstream (zero cost)
      </text>

      {/* Arrow */}
      <line x1="300" y1="205" x2="300" y2="230" stroke="#6c757d" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Stage 3: Content Extraction */}
      <rect x="50" y="230" width="500" height="80" fill="#f0f8ff" stroke="#0066cc" strokeWidth="2" rx="4" />
      <text x="300" y="260" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0066cc">
        newspaper3k Extraction
      </text>
      <text x="300" y="280" textAnchor="middle" fontSize="12" fill="#333">
        Parse article content (2x daily)
      </text>
      <text x="300" y="295" textAnchor="middle" fontSize="11" fill="#666">
        Track: success, paywall, failed
      </text>

      {/* Arrow */}
      <line x1="300" y1="310" x2="300" y2="335" stroke="#6c757d" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Stage 4: LLM Classification */}
      <rect x="50" y="335" width="500" height="100" fill="#f0e6ff" stroke="#7c3aed" strokeWidth="2" rx="4" />
      <text x="300" y="365" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#7c3aed">
        GROQ LLM Classification
      </text>
      <text x="300" y="385" textAnchor="middle" fontSize="12" fill="#333">
        Extract: type (advisory/sighting/warning), country, district, disease
      </text>
      <text x="300" y="403" textAnchor="middle" fontSize="11" fill="#666">
        Semantic filtering: 1,364 articles → 36 relevant signals
      </text>
      <text x="300" y="420" textAnchor="middle" fontSize="10" fill="#999">
        Guard rails against hallucinations
      </text>

      {/* Arrow */}
      <line x1="300" y1="435" x2="300" y2="460" stroke="#6c757d" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Stage 5: Geolookup */}
      <rect x="50" y="460" width="500" height="70" fill="#e8f5e9" stroke="#4caf50" strokeWidth="2" rx="4" />
      <text x="300" y="490" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#4caf50">
        SQL Geolookup
      </text>
      <text x="300" y="510" textAnchor="middle" fontSize="12" fill="#333">
        Add latitude &amp; longitude from GPS data source
      </text>

      {/* Arrow */}
      <line x1="300" y1="530" x2="300" y2="555" stroke="#6c757d" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Stage 6: Gold Table */}
      <rect x="50" y="555" width="500" height="70" fill="#fce4ec" stroke="#e91e63" strokeWidth="2" rx="4" />
      <text x="300" y="585" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#e91e63">
        Gold Table (wheat_disease)
      </text>
      <text x="300" y="605" textAnchor="middle" fontSize="12" fill="#333">
        Final dataset: country, district, lat/long, type, date, disease
      </text>

      {/* Arrow */}
      <line x1="300" y1="625" x2="300" y2="650" stroke="#6c757d" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Stage 7: Visualization */}
      <rect x="50" y="650" width="500" height="30" fill="#ffe0b2" stroke="#ff9800" strokeWidth="2" rx="4" />
      <text x="300" y="672" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#ff9800">
        Leaflet.js Maps + Highcharts.js Trends
      </text>
    </svg>
  );

  return (
    <div className="d-print-none" style={{ minHeight: "100vh", width: "100%" }}>
      {/* Header section - centered content */}
      <div style={{ background: "#f5f5f5", padding: "56px 48px" }}>
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
        </div>
      </div>

      {/* Problem Section - full-width background with constrained content */}
      <section style={{ background: "#f5f5f5", padding: "3rem 48px", width: "100%" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 className="h5 fw-bold text-dark mb-3 position-relative">
            Problem
            <div
              className="position-absolute bottom-0 start-0 bg-primary"
              style={{ height: "3px", width: "40px" }}
            ></div>
          </h2>
          <p className="text-dark mb-4">{project.details.problem}</p>

          {/* Show flowchart only for wheat disease project */}
          {project.slug === "wheat-disease-monitoring" && (
            <div style={{ overflowX: "auto" }}>
              <h3 className="h6 fw-bold text-dark mb-3">Pipeline Architecture</h3>
              <WheatDiseaseFlowchart />
            </div>
          )}
        </div>
      </section>

      {/* Remaining content - centered */}
      <div style={{ background: "#f5f5f5", padding: "3rem 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
    </div>
  );
};

export default ProjectDetail;

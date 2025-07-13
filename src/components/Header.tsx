import resumeData from "../data/resume.json";

return (
  <header className="mb-4">
    <div
      className="bg-white rounded-3 shadow-sm p-4 d-flex align-items-center gap-4"
      style={{ fontSize: 18, color: "#222" }}
    >
      <span className="d-flex align-items-center">
        <i className="bi bi-house-door-fill me-2"></i>
        <span className="text-dark small">
          {resumeData.personalInfo.location}
        </span>
      </span>
      <a
        href={`tel:${resumeData.personalInfo.phone}`}
        className="d-flex align-items-center text-decoration-none"
      >
        <i className="bi bi-telephone-fill me-2"></i>
        <span className="text-dark small">{resumeData.personalInfo.phone}</span>
      </a>
      <a
        href={`mailto:${resumeData.personalInfo.email}`}
        className="d-flex align-items-center text-decoration-none"
      >
        <i className="bi bi-envelope-fill me-2"></i>
        <span className="text-dark small">{resumeData.personalInfo.email}</span>
      </a>
      <a
        href={`http://${resumeData.personalInfo.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center text-decoration-none"
      >
        <i className="bi bi-globe me-2"></i>
        <span className="text-dark small">
          {resumeData.personalInfo.website}
        </span>
      </a>
    </div>
  </header>
);

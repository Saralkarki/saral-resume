import React from "react";
import resumeData from "../data/resume.json";

const Education: React.FC = () => {
  return (
    <section className="education mb-4 text-start">
      <h2
        className="h5 fw-bold mb-3"
        style={{ color: "#222", letterSpacing: 1 }}
      >
        <i className="bi bi-mortarboard-fill me-2"></i>
        Education
      </h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="bg-white rounded-3 shadow-sm mb-3 p-4">
          <h3 className="h6 fw-bold mb-1" style={{ color: "#222" }}>
            {edu.degree}
          </h3>
          <div className="fw-medium mb-1" style={{ color: "#222" }}>
            {edu.institution}
          </div>
          <small className="text-muted">{edu.location}</small>
        </div>
      ))}
    </section>
  );
};

export default Education;

import React, { useState } from "react";
import resumeData from "../data/resume.json";

const Experience: React.FC = () => {
  return (
    <section className="experience mb-4 text-start">
      <h2
        className="h5 fw-bold mb-3"
        style={{ color: "#222", letterSpacing: 1 }}
      >
        <i className="bi bi-briefcase-fill me-2"></i>
        Work Experience
      </h2>
      {resumeData.experience.map((job, index) => {
        const [open, setOpen] = useState(false);
        return (
          <div key={index} className="bg-white rounded-3 shadow-sm mb-4 p-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h3 className="h6 fw-bold mb-1" style={{ color: "#222" }}>
                  {job.title}
                </h3>
                <div className="fw-medium mb-1" style={{ color: "#222" }}>
                  {job.company}
                </div>
                <div className="text-muted small mb-1">
                  <span className="me-2">
                    <i className="bi bi-geo-alt-fill"></i> {job.location}
                  </span>
                  <span>
                    <i className="bi bi-calendar-event"></i> {job.period}
                  </span>
                </div>
              </div>
              <button
                className="btn btn-sm btn-outline-primary ms-2"
                style={{ borderColor: "#009688", color: "#009688" }}
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-controls={`exp-details-${index}`}
              >
                {open ? (
                  <span>
                    <i className="bi bi-chevron-up"></i> Hide
                  </span>
                ) : (
                  <span>
                    <i className="bi bi-chevron-down"></i> Details
                  </span>
                )}
              </button>
            </div>
            {open && (
              <ul id={`exp-details-${index}`} className="mb-0 ps-4">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-dark mb-2">
                    {responsibility}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Experience;

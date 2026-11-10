import React, { useState } from "react";
import resumeData from "../data/resume.json";

type ResponsibilityGroup = {
  category?: string;
  items: string[];
};

type Job = (typeof resumeData.experience)[number];

const JobCard: React.FC<{ job: Job; index: number }> = ({ job, index }) => {
  const [open, setOpen] = useState(false);
  const groups = job.responsibilities as ResponsibilityGroup[];

  return (
    <div className="bg-white rounded-3 shadow-sm mb-4 p-4">
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
            <span className="me-2">
              <i className="bi bi-calendar-event"></i> {job.period}
            </span>
            {"employmentType" in job && job.employmentType ? (
              <span>{job.employmentType}</span>
            ) : null}
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
      {job.description ? (
        <p className="text-dark small mb-2">{job.description}</p>
      ) : null}
      <div
        id={`exp-details-${index}`}
        className={open ? "d-block" : "d-none d-print-block"}
      >
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-3">
            {group.category ? (
              <div className="fw-semibold small mb-1" style={{ color: "#222" }}>
                {group.category}
              </div>
            ) : null}
            <ul className="mb-0 ps-4">
              {group.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-dark mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

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
      {resumeData.experience.map((job, index) => (
        <JobCard key={index} job={job} index={index} />
      ))}
    </section>
  );
};

export default Experience;

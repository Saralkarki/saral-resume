import React from "react";
import resumeData from "../data/resume.json";

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {resumeData.experience.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.title}</h3>
          <div className="job-info">
            <span>{job.company}</span> | <span>{job.location}</span> |{" "}
            <span>{job.period}</span>
          </div>
          <ul>
            {job.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;

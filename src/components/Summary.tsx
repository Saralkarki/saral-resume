import React from "react";
import resumeData from "../data/resume.json";

const Summary: React.FC = () => {
  return (
    <section className="summary mb-5">
      <h2 className="h4 fw-bold text-dark mb-3 position-relative">
        Professional Summary
        <div
          className="position-absolute bottom-0 start-0 bg-primary"
          style={{ height: "3px", width: "60px" }}
        ></div>
      </h2>
      {resumeData.professionalSummary.split("\n\n").map((paragraph, index) => (
        <p key={index} className="fs-6 text-dark lh-lg">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default Summary;

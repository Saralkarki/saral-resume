import React from "react";
import resumeData from "../data/resume.json";

const Summary: React.FC = () => {
  return (
    <section className="summary">
      <h2 className="section-title">Professional Summary</h2>
      <p className="summary-text">{resumeData.professionalSummary}</p>
    </section>
  );
};

export default Summary;

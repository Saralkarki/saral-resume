import React from "react";
import resumeData from "../data/resume.json";

const CoreCompetencies: React.FC = () => {
  return (
    <section className="core-competencies mb-5">
      <h2 className="h4 fw-bold text-dark mb-3 position-relative">
        Core Competencies
        <div
          className="position-absolute bottom-0 start-0 bg-primary"
          style={{ height: "3px", width: "60px" }}
        ></div>
      </h2>
      <div className="row g-3">
        {resumeData.coreCompetencies.map((item, index) => (
          <div key={index} className="col-md-6">
            <div className="bg-white rounded-3 shadow-sm h-100 p-3">
              <h3 className="h6 fw-bold mb-1" style={{ color: "#222" }}>
                {item.name}
              </h3>
              <p className="text-dark small mb-0">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetencies;

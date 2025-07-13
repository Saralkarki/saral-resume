import React from "react";
import resumeData from "../data/resume.json";

const Skills: React.FC = () => {
  return (
    <section className="skills mb-5">
      <h2 className="h5 fw-bold text-dark mb-3 position-relative">
        Technical Skills
        <div
          className="position-absolute bottom-0 start-0 bg-primary"
          style={{ height: "3px", width: "40px" }}
        ></div>
      </h2>
      {resumeData.technicalSkills.map((category, index) => (
        <div key={index} className="skill-category mb-4">
          <h3 className="h6 fw-bold text-primary mb-2">{category.category}</h3>
          <div className="d-flex flex-wrap gap-1">
            {category.skills.map((skill, idx) => (
              <span
                key={idx}
                className="badge bg-light text-dark border px-2 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;

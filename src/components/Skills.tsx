import React from "react";
import resumeData from "../data/resume.json";

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      {resumeData.technicalSkills.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <div className="skills-list">
            {category.skills.map((skill, idx) => (
              <span key={idx} className="skill">
                {skill}
                {idx < category.skills.length - 1 && " • "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

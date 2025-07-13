import React from "react";
import resumeData from "../data/resume.json";

const Education: React.FC = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <div>
            {edu.institution}, {edu.location}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;

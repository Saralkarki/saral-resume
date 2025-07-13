import React from "react";
import resumeData from "../data/resume.json";

const Certifications: React.FC = () => {
  return (
    <div className="certifications">
      <h2>Certifications</h2>
      {resumeData.certifications.map((cert, index) => (
        <div key={index} className="certification">
          <h3>{cert.name}</h3>
          <div>
            {cert.issuer} - {cert.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;

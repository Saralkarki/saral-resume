import React from "react";
import resumeData from "../data/resume.json";

const Publications: React.FC = () => {
  return (
    <div className="publications">
      <h2>Publications</h2>
      {resumeData.publications.map((pub, index) => (
        <div key={index} className="publication">
          <h3>{pub.title}</h3>
          <div>
            {pub.journal} - {pub.date}
          </div>
          <div>
            DOI:{" "}
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.doi}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publications;

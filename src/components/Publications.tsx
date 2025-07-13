import React from "react";
import resumeData from "../data/resume.json";

const Publications: React.FC = () => {
  return (
    <section className="publications mb-5">
      <h2 className="h5 fw-bold text-dark mb-3 position-relative">
        Publications
        <div
          className="position-absolute bottom-0 start-0 bg-primary"
          style={{ height: "3px", width: "40px" }}
        ></div>
      </h2>
      {resumeData.publications.map((pub, index) => (
        <div key={index} className="publication-item mb-3 p-3 bg-light rounded">
          <h3 className="h6 fw-bold text-dark mb-2">{pub.title}</h3>
          <p className="text-primary fw-medium mb-1 small">{pub.journal}</p>
          <p className="text-muted mb-2 small">{pub.date}</p>
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark small"
          >
            DOI: {pub.doi} <i className="bi bi-box-arrow-up-right ms-1"></i>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Publications;

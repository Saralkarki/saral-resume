import React from "react";
import resumeData from "../data/resume.json";

const MediaPortfolio: React.FC = () => {
  return (
    <section className="media-portfolio mb-5">
      <h2 className="h5 fw-bold text-dark mb-3 position-relative">
        Medium Articles
        <div
          className="position-absolute bottom-0 start-0 bg-primary"
          style={{ height: "3px", width: "40px" }}
        ></div>
      </h2>
      {resumeData.mediaPortfolio.map((article, index) => (
        <div key={index} className="media-item mb-2">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark small d-block p-2 rounded hover-bg-light"
          >
            <i className="bi bi-medium me-2 text-primary"></i>
            {article.title}
          </a>
        </div>
      ))}
    </section>
  );
};

export default MediaPortfolio;

import React from "react";
import resumeData from "../data/resume.json";

const MediaPortfolio: React.FC = () => {
  return (
    <div className="media-portfolio">
      <h2>Data Visualizations on Medium</h2>
      {resumeData.mediaPortfolio.map((article, index) => (
        <div key={index} className="media-item">
          <h3>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MediaPortfolio;

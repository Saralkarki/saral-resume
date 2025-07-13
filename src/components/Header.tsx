import resumeData from "../data/resume.json";

export default function Header() {
  return (
    <header>
      <h1>{resumeData.personalInfo.name}</h1>
      <h2>{resumeData.personalInfo.title}</h2>
      <div className="contact-info">
        <div>{resumeData.personalInfo.location}</div>
        <div>
          <a href={`tel:${resumeData.personalInfo.phone}`}>
            {resumeData.personalInfo.phone}
          </a>{" "}
          |
          <a href={`mailto:${resumeData.personalInfo.email}`}>
            {resumeData.personalInfo.email}
          </a>
        </div>
        <div>
          <a
            href={resumeData.personalInfo.portfolio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium Portfolio
          </a>{" "}
          |
          <a
            href={`http://${resumeData.personalInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {resumeData.personalInfo.website}
          </a>
        </div>
      </div>
    </header>
  );
}

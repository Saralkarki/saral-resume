import resumeData from "../data/resume.json";
import avatarUrl from "../../image/saral.png";

export default function ProfileCard() {
  return (
    <aside
      className="profile-card d-flex flex-column align-items-center p-0"
      style={{
        minHeight: 600,
        background: "#fff",
        color: "#222",
        width: 320,
        borderRight: "1px solid #e0e0e0",
        boxShadow: "2px 0 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="w-100 position-relative"
        style={{ height: 180, background: "#fff" }}
      >
        <img
          src={avatarUrl}
          alt={resumeData.personalInfo.name}
          className="rounded-circle border border-3 border-white position-absolute top-100 start-50 translate-middle"
          style={{
            width: 140,
            height: 140,
            objectFit: "cover",
            marginTop: 0,
            zIndex: 2,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          }}
        />
      </div>
      <div
        className="w-100 d-flex flex-column align-items-center px-4 pt-5 pb-4"
        style={{ marginTop: 70 }}
      >
        <h2
          className="h4 fw-bold mb-1"
          style={{ color: "#222", textAlign: "center" }}
        >
          {resumeData.personalInfo.name}
        </h2>
        <p
          className="mb-3"
          style={{ color: "#555", textAlign: "center", fontWeight: 500 }}
        >
          {resumeData.personalInfo.title}
        </p>
        <hr
          className="my-3 w-100"
          style={{ borderColor: "#e0e0e0", opacity: 0.7 }}
        />
        <div className="mb-3 w-100" style={{ textAlign: "left" }}>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-geo-alt-fill me-2" style={{ fontSize: 18 }}></i>
            <span className="small" style={{ color: "#222" }}>
              {resumeData.personalInfo.location}
            </span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <i
              className="bi bi-envelope-fill me-2"
              style={{ fontSize: 18 }}
            ></i>
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="small text-decoration-none"
              style={{ color: "#222" }}
            >
              {resumeData.personalInfo.email}
            </a>
          </div>
          <div className="d-flex align-items-center mb-2">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ fontSize: 18 }}
            ></i>
            <a
              href={`tel:${resumeData.personalInfo.phone}`}
              className="small text-decoration-none"
              style={{ color: "#222" }}
            >
              {resumeData.personalInfo.phone}
            </a>
          </div>
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-globe me-2" style={{ fontSize: 18 }}></i>
            <a
              href={`http://${resumeData.personalInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="small text-decoration-none"
              style={{ color: "#222" }}
            >
              {resumeData.personalInfo.website}
            </a>
          </div>
        </div>
        <hr
          className="my-3 w-100"
          style={{ borderColor: "#e0e0e0", opacity: 0.7 }}
        />
        <div className="mb-2 w-100" style={{ textAlign: "left" }}>
          <h3
            className="h6 fw-bold mb-3"
            style={{ color: "#222", letterSpacing: 0.5 }}
          >
            <i
              className="bi bi-laptop me-2"
              style={{ fontSize: 16, verticalAlign: "middle" }}
            ></i>
            Skills
          </h3>
          {resumeData.technicalSkills.map((category, idx) => (
            <div key={idx} className="mb-3">
              <div
                className="fw-semibold small mb-1"
                style={{ color: "#444", fontSize: 13, letterSpacing: 0.2 }}
              >
                {category.category}
              </div>
              <div
                className="ms-2"
                style={{ fontSize: 13, color: "#222", lineHeight: 1.7 }}
              >
                {category.skills.map((skill, i) => (
                  <span key={i}>
                    {skill}
                    {i < category.skills.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

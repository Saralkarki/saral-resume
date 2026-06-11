import "bootstrap-icons/font/bootstrap-icons.css";
import ProfileCard from "./components/ProfileCard";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import MediaPortfolio from "./components/MediaPortfolio";
import resumeData from "./data/resume.json";

function App() {
  return (
    <div
      className="resume-root d-flex min-vh-100 flex-row flex-md-row flex-column"
      style={{ background: "#e0e0e0" }}
    >
      {/* Print-Only Header (Hidden on Screen) */}
      <div className="print-only-header d-none d-print-block w-100 text-center mb-4 pb-2 border-bottom border-dark">
        <h1 className="fw-bold text-uppercase mb-1" style={{ fontSize: "24pt" }}>{resumeData.personalInfo.name}</h1>
        <p className="mb-1" style={{ fontSize: "11pt", fontWeight: "bold" }}>{resumeData.personalInfo.location}</p>
        <p style={{ fontSize: "11pt" }}>
          <i className="bi bi-telephone-fill me-1"></i> {resumeData.personalInfo.phone} | 
          <i className="bi bi-envelope-fill mx-1"></i> {resumeData.personalInfo.email}
        </p>
      </div>

      {/* Sidebar/ProfileCard (Hidden on Print) */}
      <div
        className="profile-col bg-white d-print-none"
        style={{
          flex: "0 0 320px",
          minHeight: "100vh",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "2px 0 8px rgba(0,0,0,0.04)",
        }}
      >
        <ProfileCard />
      </div>

      {/* Main Content */}
      <main
        className="main-content flex-grow-1"
        style={{
          background: "#f5f5f5",
          minHeight: "100vh",
          padding: "56px 48px 48px 48px",
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <div className="mb-4">
          <Summary />
        </div>
        <div className="mb-4">
          <Experience />
        </div>
        <div className="mb-4">
          <Projects />
        </div>
        <div className="mb-4">
          <Education />
        </div>
        <div className="mb-4">
          <Publications />
        </div>
        <div className="mb-4">
          <MediaPortfolio />
        </div>

        {/* Print-Only Referees Section */}
        <div className="print-only-referees d-none d-print-block mt-5 pt-3 border-top border-dark">
          <h2 className="h5 fw-bold text-uppercase mb-2">Referees</h2>
          <p>Excellent referees available upon request</p>
        </div>
      </main>
    </div>
  );
}

export default App;

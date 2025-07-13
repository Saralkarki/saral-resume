import "bootstrap-icons/font/bootstrap-icons.css";
import ProfileCard from "./components/ProfileCard";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import MediaPortfolio from "./components/MediaPortfolio";

function App() {
  return (
    <div className="d-flex min-vh-100" style={{ background: "#e0e0e0" }}>
      {/* Sidebar */}
      <div
        style={{
          flex: "0 0 320px",
          background: "#fff",
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
        className="flex-grow-1"
        style={{
          background: "#f5f5f5",
          minHeight: "100vh",
          padding: "56px 48px 48px 48px",
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        {/* Remove Header, already in sidebar */}
        <div className="mb-4">
          <Summary />
        </div>
        <div className="mb-4">
          <Experience />
        </div>
        <div className="mb-4">
          <Education />
        </div>
        <div className="mb-4">
          <Projects />
        </div>
        <div className="mb-4">
          <Publications />
        </div>
        <div className="mb-4">
          <MediaPortfolio />
        </div>
      </main>
    </div>
  );
}

export default App;

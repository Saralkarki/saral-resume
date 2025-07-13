import "./App.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import MediaPortfolio from "./components/MediaPortfolio";

function App() {
  return (
    <div className="app">
      <main className="resume">
        <section className="intro">
          <Header />
          <Summary />
        </section>
        <section className="content">
          <Experience />
          <Education />
        </section>
        <aside className="sidebar">
          <Skills />
          <Projects />
          <Publications />
          <MediaPortfolio />
        </aside>
      </main>
    </div>
  );
}

export default App;

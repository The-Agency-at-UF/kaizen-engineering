import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import MonacoEditor from "./components/MonacoEditor";
import StudentExperience from "./components/StudentExperience";
import ReportExperience from "./components/ReportExperience";
import InstructorExperience from "./components/InstructorExperience";
import Comparison from "./components/Comparison";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <MonacoEditor />
        <StudentExperience />
        <ReportExperience />
        <InstructorExperience />
        <Comparison />
      </main>
    </div>
  );
}

export default App;
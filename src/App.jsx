import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import MonacoEditor from "./components/MonacoEditor";
import StudentExperience from "./components/StudentExperience";
import ReportExperience from "./components/ReportExperience";
import InstructorExperience from "./components/InstructorExperience";
import Comparison from "./components/Comparison";
import ScrollReveal from "./components/ScrollReveal";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>

        <ScrollReveal>
          <MonacoEditor />
        </ScrollReveal>

        <ScrollReveal>
          <StudentExperience />
        </ScrollReveal>

        <ScrollReveal>
          <ReportExperience />
        </ScrollReveal>

        <ScrollReveal>
          <InstructorExperience />
        </ScrollReveal>

        <ScrollReveal>
          <Comparison />
        </ScrollReveal>

        <ScrollReveal>
          <Community />
        </ScrollReveal>

        <Footer />
      </main>
    </div>
  );
}

export default App;
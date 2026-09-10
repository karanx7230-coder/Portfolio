import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero.tsx";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CinematicSection } from "./components/CinematicSection";
import { CursorFollower } from "./components/CursorFollower";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col font-sans selection:bg-[#1E4738]/20 selection:text-[#1E4738]">
      <Navbar />
      <CursorFollower />
      <main className="flex-grow">
        <Hero />
        <CinematicSection index={1}>
          <About />
        </CinematicSection>
        <CinematicSection index={2}>
          <TechStack />
        </CinematicSection>
        <CinematicSection index={3}>
          <Projects />
        </CinematicSection>
        <CinematicSection index={4}>
          <Experience />
        </CinematicSection>
        <CinematicSection index={5}>
          <Education />
        </CinematicSection>
        <CinematicSection index={6}>
          <Contact />
        </CinematicSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;

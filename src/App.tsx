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
import { ScrollProgress } from "./components/ScrollProgress";
import { AtomMark } from "./components/AtomMark";
import { Marquee } from "./components/Marquee";
import { StatsBand } from "./components/StatsBand";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col font-sans overflow-x-clip selection:bg-[#1E4738]/20 selection:text-[#1E4738]">
      <ScrollProgress />
      {/* Site-wide faint rotating mark — behind everything */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-48 top-1/2 -translate-y-1/2 z-0 opacity-[0.08]"
      >
        <AtomMark size={820} stroke="#1E4738" spinSeconds={70} />
      </div>
      <Navbar />
      <main className="flex-grow relative z-[1]">
        <Hero />
        <Marquee />
        <CinematicSection index={1}>
          <About />
        </CinematicSection>
        <CinematicSection index={2}>
          <StatsBand />
        </CinematicSection>
        <CinematicSection index={3}>
          <TechStack />
        </CinematicSection>
        {/* Projects unwrapped: its sticky visuals break inside transformed ancestors */}
        <Projects />
        <CinematicSection index={5}>
          <Experience />
        </CinematicSection>
        <CinematicSection index={6}>
          <Education />
        </CinematicSection>
        <CinematicSection index={7}>
          <Contact />
        </CinematicSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;

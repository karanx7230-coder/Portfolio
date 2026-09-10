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
import { Marquee } from "./components/Marquee";
import { CuriosityDivider } from "./components/CuriosityDivider";
import { StatsBand } from "./components/StatsBand";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col font-sans overflow-x-clip selection:bg-[#1E4738]/20 selection:text-[#1E4738]">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <CinematicSection index={1}>
          <About />
        </CinematicSection>
        <CuriosityDivider
          chapter="Keep going"
          eyebrow="The proof"
          title="But what can he actually build?"
          hint="Scroll — two full apps are waiting below"
        />
        <CinematicSection index={2}>
          <StatsBand />
        </CinematicSection>
        <CinematicSection index={3}>
          <TechStack />
        </CinematicSection>
        <CuriosityDivider
          chapter="Don't stop"
          eyebrow="Real work"
          title="Okay — but where's the shipped proof?"
          hint="Case studies with auth, feeds, cart & DMs"
        />
        <CinematicSection index={4}>
          <Projects />
        </CinematicSection>
        <CuriosityDivider
          chapter="Almost there"
          eyebrow="The journey"
          title="Where did all of this come from?"
          hint="6 months of daily building in Mohali"
        />
        <CinematicSection index={5}>
          <Experience />
        </CinematicSection>
        <CinematicSection index={6}>
          <Education />
        </CinematicSection>
        <CuriosityDivider
          chapter="Final chapter"
          eyebrow="Your move"
          title="Want him building for you next?"
          hint="One scroll left — say hello below"
        />
        <CinematicSection index={7}>
          <Contact />
        </CinematicSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;

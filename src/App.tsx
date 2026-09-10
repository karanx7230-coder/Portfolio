import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CinematicSection } from "./components/CinematicSection";
import GlowCursor from "./components/GlowCursor";

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const touchQuery = window.matchMedia("(pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMediaState = () => {
      setIsTouchDevice(touchQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
    };

    updateMediaState();
    touchQuery.addEventListener("change", updateMediaState);
    motionQuery.addEventListener("change", updateMediaState);
    return () => {
      touchQuery.removeEventListener("change", updateMediaState);
      motionQuery.removeEventListener("change", updateMediaState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] flex flex-col font-sans selection:bg-[#1E4738]/20 selection:text-[#1E4738]">
      <Navbar />
      <GlowCursor
        color="#C5A059"
        secondaryColor="#2D5D4A"
        trailWidth={4}
        glowIntensity={1.1}
        brightness={0.9}
        opacity={0.7}
        idleFade
        blendMode="normal"
        enabled={!isTouchDevice && !prefersReducedMotion}
      >
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
      </GlowCursor>
    </div>
  );
}

export default App;

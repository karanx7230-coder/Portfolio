import { useEffect, useState } from "react";
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
        color="#111111"
        secondaryColor="#444444"
        trailWidth={8}
        trailLength={40}
        trailTaper={0.8}
        followSpeed={0.16}
        glowIntensity={1.9}
        glowSpread={1.2}
        hotspot={0.65}
        brightness={1.25}
        opacity={1}
        pulseSpeed={1.1}
        noiseStrength={0.035}
        idleFade
        idleTimeout={700}
        fadeDuration={900}
        blendMode="multiply"
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

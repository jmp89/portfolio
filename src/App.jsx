// De librerias
import { useRef } from "react";
import { motion } from "framer-motion";
// Las páginas (secciones en este caso por ser landing)
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
// Componentes
import Footer from "./components/Footer";
import Header from "./components/Header";
import AnimatedSection from "./components/AnimatedSection";
// Hooks
import useIntersectionObserver from "./hooks/useIntersectionObserver";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [homeRef, projectsRef, achievementsRef, contactRef];
  const activeId = useIntersectionObserver(sectionRefs);

  return (
    <div className="flex flex-col min-h-dvh bg-neutral-800 text-gray-400 overflow-x-hidden scroll-smooth">
      <Header activeId={activeId} />
      <motion.main className="flex flex-grow flex-col justify-around max-w-screen-xl mx-auto">
        <AnimatedSection id="home" ref={homeRef}>
          <Home />
        </AnimatedSection>
        <AnimatedSection id="projects" ref={projectsRef}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="achievements" ref={achievementsRef}>
          <Achievements />
        </AnimatedSection>
        <AnimatedSection id="contact" ref={contactRef}>
          <Contact />
        </AnimatedSection>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;

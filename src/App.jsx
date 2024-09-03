import { useRef } from "react";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Achievements";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [homeRef, experienceRef, projectsRef, contactRef];
  const activeId = useIntersectionObserver(sectionRefs);

  return (
    <div className="flex flex-col min-h-dvh bg-neutral-800 text-gray-400 overflow-x-hidden scroll-smooth">
      <Header activeId={activeId} />
      <motion.main className="flex flex-grow flex-col justify-around max-w-screen-xl mx-auto">
        <AnimatedSection id="home" ref={homeRef}>
          <Home />
        </AnimatedSection>
        <AnimatedSection id="experience" ref={experienceRef}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection id="projects" ref={projectsRef}>
          <Projects />
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

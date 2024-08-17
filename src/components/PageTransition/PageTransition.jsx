// PageTransition.js
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 300); // Match this to the duration of your transition
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate={isVisible ? "enter" : "initial"}
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

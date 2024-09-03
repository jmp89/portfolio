import { motion } from "framer-motion";
import { forwardRef } from "react";

const AnimatedSection = forwardRef(({ id, children, className = "" }, ref) => {
  return (
    <motion.section
      className={`relative mb-16 ${className}`}
      id={id}
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1, margin: "-50px 0px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
});

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;

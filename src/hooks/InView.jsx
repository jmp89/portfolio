import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Configuración por defecto
const defaultVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(4px)" }, // Reduce y a 50
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const defaultTransition = { duration: 0.3, ease: "easeInOut" };
const defaultViewOptions = { margin: "0px 0px -100px 0px" }; // Ajusta el margen a -100px

export function InView({
  children,
  variants = defaultVariants,
  transition = defaultTransition,
  viewOptions = defaultViewOptions,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

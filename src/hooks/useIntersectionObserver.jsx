import { useState, useEffect } from "react";

const useIntersectionObserver = (refs) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Consideramos la sección activa si está intersectando y tiene la mayor intersección
        if (
          entry.isIntersecting &&
          (!activeId || entry.intersectionRatio > observerOptions.threshold[0])
        ) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Asegurarse de que "Inicio" esté activo cuando estamos en la parte superior de la página
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveId("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return activeId;
};

export default useIntersectionObserver;

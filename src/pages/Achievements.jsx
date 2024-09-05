import AnimatedSection from "../components/AnimatedSection";
import Titlebar from "../components/Titlebar";
import { motion } from "framer-motion";

const Achievements = () => {
  const studies = [
    {
      title: "Equivalencia bachillerato (nivel 3)",
      details: "IES Vecindario (2023)",
    },
    {
      title: "Certificado desarrollador full stack developer",
      details: "HACK A BOSS (2024)",
    },
    {
      title: "Certificado de desarrollo de mini app",
      details: "HACK A BOSS (2024)",
    },
    {
      title: "Certificado de aptitud en pruebas técnicas",
      details: "HACK A BOSS (2024)",
    },
    {
      title: "Certificado de aprovechamiento y asistencia",
      details: "HACK A BOSS (2024)",
    },
  ];

  return (
    <>
      <Titlebar text={"ESTUDIOS"} className={"-top-6 sm:-top-16"} />
      <div className="relative w-full mt-10">
        {/* Línea central del timeline */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-400"></div>
        <div className="flex flex-col space-y-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              className={`relative flex ${
                index % 2 === 0
                  ? "justify-start sm:ml-20"
                  : "justify-end sm:-ml-20"
              } w-full`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Punto del timeline */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 z-10 ${
                  index % 2 === 0 ? "sm:-ml-20" : "sm:ml-20"
                }`}
              ></div>
              <article
                className={`relative w-5/12 p-4 shadow-md bg-gray-400 text-neutral-800 rounded-lg ${
                  index % 2 === 0 ? "mr-2 text-right" : "ml-2 text-left"
                }`}
              >
                <h3 className="text-lg font-semibold">{study.title}</h3>
                <p>{study.details}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;

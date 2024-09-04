import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiJavascript } from "react-icons/si";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-neutral-800 min-w-80 shadow-md rounded-lg overflow-hidden max-w-xs relative hover:bg-neutral-700"
        whileHover={{ scale: 0.95 }}
      >
        <div className="relative ">
          <img
            src={project.image || "/logoJMP.webp"}
            alt={project.title}
            className={`w-full h-48 object-contain rounded-lg ${
              !project.image && "opacity-30"
            }`}
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-200">
            {project.title}
          </h2>
          <p>{project.shortDescription}</p>
          <div className="flex items-center mt-2 space-x-2">
            {project.technologies.includes("HTML5") && (
              <FaHtml5 className="text-orange-600 text-2xl" />
            )}
            {project.technologies.includes("CSS3") && (
              <FaCss3Alt className="text-blue-600 text-2xl" />
            )}
            {project.technologies.includes("Tailwind") && (
              <SiTailwindcss className="text-teal-500 text-2xl" />
            )}
            {project.technologies.includes("React") && (
              <FaReact className="text-blue-500 text-2xl" />
            )}
            {project.technologies.includes("JavaScript") && (
              <SiJavascript className="text-yellow-500 text-2xl" />
            )}
            {project.technologies.includes("Node.js") && (
              <FaNodeJs className="text-green-600 text-2xl" />
            )}
            {project.technologies.includes("MySQL") && (
              <SiMysql className="text-blue-700 text-2xl" />
            )}
          </div>
          <div className="flex items-center mt-2 space-x-4 ">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className={`text-2xl  ${
                  project.githubLink
                    ? "hover:text-orange-500"
                    : "opacity-50 cursor-default"
                }`}
              />
            </a>
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt
                className={`text-2xl  ${
                  project.websiteLink
                    ? "hover:text-orange-500"
                    : "opacity-50 cursor-default"
                }`}
              />
            </a>
          </div>
          <button
            className="absolute bottom-3 right-3 bg-orange-500 text-white p-3 rounded-full hover:text-neutral-800"
            onClick={() => setIsOpen(true)}
          >
            <FaPlus size={"0.8rem"} />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-neutral-800 rounded-lg p-6 max-w-lg w-full relative "
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                className="absolute top-2 right-2  hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                &#x2715;
              </button>
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h2>
              <img
                src={project.image || "/logoJMP.webp"}
                alt={project.title}
                className={`w-full h-48 object-cover object-top rounded-md mb-4 ${
                  !project.image && "opacity-20"
                }`}
              />
              <p className=" mb-4">{project.longDescription}</p>
              <div className="flex items-center mt-2 space-x-2">
                {project.technologies.includes("HTML5") && (
                  <FaHtml5 className="text-orange-600 text-2xl" />
                )}
                {project.technologies.includes("CSS3") && (
                  <FaCss3Alt className="text-blue-600 text-2xl" />
                )}
                {project.technologies.includes("Tailwind") && (
                  <SiTailwindcss className="text-teal-500 text-2xl" />
                )}
                {project.technologies.includes("React") && (
                  <FaReact className="text-blue-500 text-2xl" />
                )}
                {project.technologies.includes("JavaScript") && (
                  <SiJavascript className="text-yellow-500 text-2xl" />
                )}
                {project.technologies.includes("Node.js") && (
                  <FaNodeJs className="text-green-600 text-2xl" />
                )}
                {project.technologies.includes("MySQL") && (
                  <SiMysql className="text-blue-700 text-2xl" />
                )}
              </div>
              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center  ${
                    project.githubLink
                      ? "hover:text-orange-500"
                      : "opacity-50 cursor-default"
                  }`}
                >
                  <FaGithub className="mr-2 text-2xl" />
                  GitHub
                </a>
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center  ${
                    project.websiteLink
                      ? "hover:text-orange-500"
                      : "opacity-50 cursor-default"
                  }`}
                >
                  <FaExternalLinkAlt className="mr-2 text-2xl" />
                  Visitar web
                </a>
              </div>
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;

import ProjectCard from "../components/ProjectCard";
import Titlebar from "../components/Titlebar";

const Projects = () => {
  const projects = [
    {
      title: "HackaVerse",
      shortDescription: "Proyecto en equipo (SCRUM) sobre hackathones.",
      longDescription:
        "HackaVerse es un portal donde se publican hackathones. Permite el registro de usuarios, y, estos a su vez registrarse a los eventos o cancelar su inscripción. Una vez finalizados, el usuario puede puntuar si ha participado en ellos. Los administradores pueden crear y modificar los eventos, y una vez terminados, puede definir el podio de las competiciones.",
      image: "https://api.hackaverse-pfb.com/media/logo_hackaverse.svg",
      githubLink: "https://github.com/jmp89/hackatonPFB#readme",
      websiteLink: "https://hackaverse-pfb.com/",
      technologies: ["HTML5", "Tailwind", "React", "Node.js", "MySQL"],
    },
    {
      title: "Movie Quiz",
      shortDescription: "Proyecto en equipo sobre un quiz.",
      longDescription:
        "Movie Quiz es un juego de preguntas y respuestas es un proyecto desarrollado durante el bootcamp de programación web de HACK A BOSS. A partir del JSON con preguntas y respuestas proporcionado se crea la app incluyendo una serie de requisitos básicos a los que se añaden funcionalidades extra para mejorar la experiencia del jugador",
      image:
        "https://github.com/3dmnt/HAB-36-GrupoE/raw/main/img/Proyecto_preguntas_y_respuesrtas_JSB36RT.jpg",
      githubLink: "https://github.com/3dmnt/HAB-36-GrupoE#readme",
      websiteLink: "https://3dmnt.github.io/HAB-36-GrupoE/",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Mi portfolio",
      shortDescription: "Aunque no lo parezca, está hecho con mucho amor.",
      longDescription:
        "Este portfolio lo he desarrollado a modo de experimentar con diferentes cositas. Además he intentado dejarlo lo más reutilizable posible para quien quiera aprovecharlo :p",
      image: "/logoJMP.webp",
      githubLink: "https://github.com/jmp89/portfolio",
      websiteLink: "",
      technologies: ["HTML5", "CSS3", "Tailwind", "React"],
    },
    {
      title: "Proyecto vacío",
      shortDescription: "Haciendo pruebas.",
      longDescription:
        "He utilizado esta tarjeta para probar si me funcionaban los estilos condicionales en caso de no poner links del repositorio , la website o la imagen.",
      image: "",
      githubLink: "",
      websiteLink: "",
      technologies: ["Node.js", "MySQL", "Tailwind", "React"],
    },
  ];

  return (
    <>
      <section className="relative p-8 xl:mt-20">
        <Titlebar text={"PROYECTOS"} className={"-top-6 sm:-top-16"} />
        <article className="flex flex-wrap gap-4 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </article>
      </section>
    </>
  );
};
export default Projects;

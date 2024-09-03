import { FaDownload, FaGithub } from "react-icons/fa";
import Titlebar from "../components/Titlebar";
import TextBox from "../components/TextBox";

const Achievements = () => {
  return (
    <section className="relative p-8">
      <Titlebar text={"ESTUDIOS"} className={"-top-10"} />
      {[...Array(7)].map((_, index) => (
        <article key={index}>
          <TextBox title={"Portfolio de Noelia Suárez Asistente virtual"}>
            <p className="pr-6">
              Un portfolio, de tipo landing page en el que la misma clienta me
              presentó el diseño, y yo se lo llevé a código.
            </p>
          </TextBox>
          <nav className="mb-8">
            <ul className="flex justify-start gap-4 mt-4">
              <li className="hover:text-orange-500 cursor-pointer">
                <a
                  href="https://github.com/jmp89/noeliasuarezav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={"2rem"} />
                </a>
              </li>
              <li>
                <a
                  href="https://noeliasuarezav.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="h-8 outline-dashed outline-1 py-1 px-3 rounded-3xl flex gap-1 hover:outline hover:text-orange-500 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <FaDownload size={"1.3rem"} />
                    Visitar web
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </article>
      ))}
    </section>
  );
};

export default Achievements;

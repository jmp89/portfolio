import { FaDownload, FaGithub } from "react-icons/fa";
import TextBox from "../components/TextBox";
import Titlebar from "../components/Titlebar";

const Experience = () => {
  return (
    <>
      <section className="relative p-8">
        <Titlebar text={"EXPERIENCE"} className={"-top-10"} />
        <article>
          <TextBox title={"HackaVerse"}>
            <p className="pr-6">
              Esta web consiste en un portal donde se gestionan y publican
              Hackathones, donde hay distintas funcionalidades según el nivel
              del usuario
            </p>
          </TextBox>
          <nav className="mb-8">
            <ul className="flex justify-start gap-4 mt-4">
              <li className="hover:text-orange-500 cursor-pointer">
                <a href="https://github.com/jmp89/hackatonPFB" target="_blank">
                  <FaGithub size={"2rem"} />
                </a>
              </li>
              <li>
                <a href="https://hackaverse-pfb.com/" target="_blank">
                  <button className="h-8 outline-dashed outline-1 py-1 px-3 rounded-3xl flex gap-1 hover:outline hover:text-orange-500 cursor-pointer">
                    <FaDownload size={"1.3rem"} />
                    Visitar web
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </article>
        <article>
          <TextBox title={"Portfolio de jmp89"}>
            <p className="pr-6">
              Así es, yo mismo desarrollé mi propio portfolio. Parece una
              tontería, pero está hecho con mucho cariño
            </p>
          </TextBox>
          <nav className="mb-8">
            <ul className="flex justify-start gap-4 mt-4">
              <li className="hover:text-orange-500 cursor-pointer">
                <a href="https://github.com/jmp89/portfolio" target="_blank">
                  <FaGithub size={"2rem"} />
                </a>
              </li>
              <li>
                <a href="https://jmp89dev.com/" target="_blank">
                  <button className="h-8 outline-dashed outline-1 py-1 px-3 rounded-3xl flex gap-1 hover:outline hover:text-orange-500 cursor-pointer">
                    <FaDownload size={"1.3rem"} />
                    Visitar web
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </section>
    </>
  );
};
export default Experience;

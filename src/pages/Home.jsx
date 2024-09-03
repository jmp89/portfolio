import Banner3D from "../components/Banner3D/Banner3D";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import TextBox from "../components/TextBox";
import { useState } from "react";

const Home = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("juanmaciasperez89@gmail.com")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 5000);
      })
      .catch(() => {
        setCopySuccess(false);
      });
  };

  return (
    <>
      <section className="max-w-screen-lg mx-auto px-4 flex items-center flex-col justify-center h-[80%] mt-28 gap-40 sm:gap-20 sm:mt-56 sm:space-y-64 sm:max-w-screen-sm xl:space-y-10 xl:space-x-8 xl:max-w-screen-xl xl:flex-row xl:mt-0 xl:mb-28 xl:h-full">
        <div className="flex-1 flex justify-center">
          <Banner3D />
        </div>
        <article className="flex-1 p-4 z-10 w-full mt-40 self">
          <TextBox title={"Sobre mí"}>
            <p className="pr-6">
              Mi nombre es Juan Macías, y soy de las Islas Canarias.
            </p>
            <p className="pr-6 mb-10">
              Soy un desarrollador full-stack Junior, dando lo mejor de mí para
              aprender más cada día, apasionado del mundo del código y con
              esperanzas de hacer de esta mi profesión permanente.
            </p>
          </TextBox>
          <nav className="mb-8">
            <ul className="flex content-between justify-start gap-4">
              <li className="hover:text-orange-500 cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/juan-maciasp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"2rem"} />
                </a>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <a
                  href="https://github.com/jmp89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={"2rem"} />
                </a>
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center p-0 bg-transparent border-none"
                >
                  <FaEnvelope size={"2rem"} />
                </button>
              </li>
              <li>
                <a href="/curriculum.pdf" target="_blank" download>
                  <button className="h-8 outline-dashed outline-1 py-1 px-3 rounded-3xl flex gap-1 hover:outline hover:text-orange-500 cursor-pointer">
                    <FaDownload size={"1.3rem"} />
                    Descargar CV
                  </button>
                </a>
              </li>
            </ul>
          </nav>
          {copySuccess && (
            <div className="mt-4 text-green-500">
              Email copiado al portapapeles!
            </div>
          )}
        </article>
      </section>
    </>
  );
};

export default Home;

import Card from "./Card";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const texts = [
  { text: "HTML5", icon: FaHtml5 },
  { text: "CSS3", icon: FaCss3Alt },
  { text: "Javascript", icon: FaJs },
  { text: "MySQL", icon: FaDatabase },
  { text: "Nodejs", icon: FaNodeJs },
  { text: "React", icon: FaReact },
  { text: "Tailwind", icon: SiTailwindcss },
];

const Banner3D = () => {
  return (
    <section className="banner">
      <div className="scene">
        <div className="slider">
          {texts.map(({ text, icon: Icon }, index) => (
            <div
              className={`item`}
              key={index}
              style={{
                "--position": index + 1,
                "--quantity": texts.length,
                zIndex: index < texts.length / 2 ? 1 : 3,
              }}
            >
              <Card text={text} Icon={Icon} />
            </div>
          ))}
        </div>
        <div className="model"></div>
      </div>
    </section>
  );
};

export default Banner3D;

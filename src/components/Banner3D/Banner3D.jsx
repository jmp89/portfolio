import Card from "./Card";

const texts = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "MySQL",
  "Nodejs",
  "React",
  "Tailwind",
];

const Banner3D = () => {
  return (
    <div className="banner ">
      <div className="scene">
        <div className="slider">
          {texts.map((text, index) => (
            <div
              className={`item absolute inset-0`}
              key={index}
              style={{
                "--position": index + 1,
                "--quantity": texts.length,
                zIndex: index < texts.length / 2 ? 1 : 3, // Z-index basado en la posición
              }}
            >
              <Card text={text} />
            </div>
          ))}
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default Banner3D;

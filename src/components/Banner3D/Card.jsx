const Card = ({ text }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        rx="15"
        ry="15"
        width="180"
        height="280"
        style={{
          fill: "#262626", // neutral-800
          stroke: "#FF8800", // Naranja
          strokeWidth: "3px",
        }}
      />
      <text
        x="50%"
        y="55%"
        fontSize="2.5rem"
        fontWeight="bold"
        fill="#FF8800"
        textAnchor="middle"
        transform="rotate(90, 100, 150)"
      >
        {text}
      </text>
    </svg>
  );
};

export default Card;

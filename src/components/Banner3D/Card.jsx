const Card = ({ text, Icon }) => {
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
        y="40%"
        fontSize="1.4rem"
        fill="#FF8800"
        textAnchor="middle"
      >
        {text}
      </text>
      <foreignObject x="0" y="130" width="200" height="100">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            height: "100%",
            color: "#FF8800",
          }}
        >
          <Icon size="5rem" />
        </div>
      </foreignObject>
    </svg>
  );
};

export default Card;

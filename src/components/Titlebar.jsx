// Titlebar.js
const Titlebar = ({ text, className = "" }) => {
  return (
    <div
      className={`absolute w-full text-center left-1/2 -translate-x-1/2  ${className}`}
    >
      <h1
        className={`text-5xl sm:text-8xl text-transparent bg-gradient-to-b from-gray-400 to-transparent bg-clip-text`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Titlebar;

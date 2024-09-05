const Titlebar = ({ text, className = "" }) => {
  return (
    <div
      className={`absolute w-full text-center left-1/2 -translate-x-1/2 ${className}`}
    >
      <h2
        className={`cursor-default text-5xl sm:text-8xl text-transparent bg-gradient-to-b from-orange-500 to-transparent bg-clip-text`}
      >
        {text}
      </h2>
    </div>
  );
};

export default Titlebar;

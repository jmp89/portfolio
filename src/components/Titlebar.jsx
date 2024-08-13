const Titlebar = ({ text }) => {
  return (
    <div className="relative h-fit mb-16">
      <h1 className="w-full text-center absolute top-6 sm:-top-5 left-1/2 -translate-x-1/2 text-5xl font-extrabold sm:text-8xl text-transparent bg-gradient-to-b from-gray-400 to-transparent bg-clip-text ">
        {text}
      </h1>
    </div>
  );
};
export default Titlebar;

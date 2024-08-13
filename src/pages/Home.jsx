import Titlebar from "../components/Titlebar";

// TODO: DAR GRADIENT A LA IMAGEN
const Home = () => {
  return (
    <>
      <Titlebar text={"WELCOME"} />

      <img
        src="/foto-web.png"
        className="bg-gradient-to-l from-transparent to-neutral-700 "
      />
    </>
  );
};
export default Home;

import Banner3D from "../components/Banner3D/Banner3D";
import Titlebar from "../components/Titlebar";

const Home = () => {
  return (
    <>
      <Titlebar text={"WELCOME"} className={"mb-16 sm:-mb-10"} />
      <Banner3D />
    </>
  );
};
export default Home;

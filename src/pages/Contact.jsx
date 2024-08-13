import Input from "../components/Input";
import Titlebar from "../components/Titlebar";

const Contact = () => {
  return (
    <>
      <Titlebar text={"CONTACT ME"} />

      <form className="space-y-3 flex flex-col items-center justify-center px-8">
        <Input label={"Prueba"} />
        <Input label={"Prueba"} />
        <Input label={"Prueba"} />
      </form>
    </>
  );
};
export default Contact;

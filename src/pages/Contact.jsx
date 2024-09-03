import Input from "../components/Input";
import Titlebar from "../components/Titlebar";

const Contact = () => {
  return (
    <>
      <Titlebar text={"CONTACTO"} className={"-top-4"} />

      <form className="space-y-3 flex flex-col items-center justify-start  px-8 pt-10 sm:pt-20">
        <Input label={"Tu nombre"} />
        <Input label={"Tu e-mail"} />
        <Input label={"Tu mensaje"} />
        <button>¡Contrátame!</button>
      </form>
    </>
  );
};
export default Contact;

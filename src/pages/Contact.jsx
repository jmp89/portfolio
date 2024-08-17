import Input from "../components/Input";
import Titlebar from "../components/Titlebar";

const Contact = () => {
  return (
    <>
      <Titlebar text={"CONTACT ME"} className={"mb-16"} />

      <form className="space-y-3 flex flex-col items-center justify-start h-screen px-8 pt-10 sm:pt-20">
        <Input label={"Your name"} />
        <Input label={"Your e-mail"} />
        <Input label={"Your message"} />
      </form>
    </>
  );
};
export default Contact;

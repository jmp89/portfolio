import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import Input from "../components/Input";
import Titlebar from "../components/Titlebar";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);

  // Maneja el cambio en el reCAPTCHA
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setCaptchaError(false);
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setCaptchaError(true);
      return;
    }

    // Envía el correo electrónico a través de EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          user_email: formState.email,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito");
          setFormState({
            name: "",
            email: "",
            message: "",
          });
          setCaptchaValue(null); // Limpiar el CAPTCHA
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <>
      <Titlebar text={"CONTACTO"} className={"-top-4"} />

      <form
        onSubmit={handleSubmit}
        className="space-y-3 flex flex-col items-center justify-start px-8 pt-10 sm:pt-20"
      >
        <Input
          label={"Tu nombre"}
          name="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <Input
          label={"Tu e-mail"}
          name="email"
          type="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
        <Input
          label={"Tu mensaje"}
          name="message"
          type="textarea"
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
        />
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
        />
        {captchaError && (
          <p className="text-red-500">Por favor, completa el CAPTCHA.</p>
        )}
        <button
          type="submit"
          className={`bg-orange-500 text-white px-4 py-2 rounded hover:scale-95 ${
            !captchaValue ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!captchaValue}
        >
          ¡Contrátame!
        </button>
      </form>
    </>
  );
};

export default Contact;

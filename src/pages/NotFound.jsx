import { useEffect, useState } from "react";
import Titlebar from "../components/Titlebar";
import { Link, Navigate } from "react-router-dom";

const NotFound = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Titlebar text={"TE PERDISTE"} />
      <section className="flex flex-col justify-center align-middle text-center mt-36">
        <p>La ruta a la que intentas acceder no existe.</p>
        <p className="underline mt-5 hover:font-bold">
          <Link to="/">Serás redirigido al inicio</Link>
        </p>
      </section>
    </>
  );
};

export default NotFound;

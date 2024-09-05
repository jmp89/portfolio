const Footer = () => {
  return (
    <footer className="shadow-md w-full mt-4 z-20 pb-4">
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              className="h-12 shadow-md"
              src={`${import.meta.env.VITE_LOGO}`}
              alt="Logo"
            />
          </div>
          <p className="text-sm pointer-events-none">
            Este portfolio será reutilizable por si quieres uno igual, lee el
            README en GitHub para más información.
          </p>
          <p className="text-sm pointer-events-none">
            &copy; 2024 @jmp89. All copyright reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="shadow-md w-full mt-4 z-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ">
          <div className="flex-shrink-0">
            <img
              className="h-12"
              src={`${import.meta.env.VITE_LOGO}`}
              alt="Logo"
            />
          </div>
          <p className="text-sm">&copy; 2024 @jmp89. All copyright reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

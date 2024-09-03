import { useState } from "react";
import HeaderMenuMobileButton from "../components/Header/HeaderMenuMobileButton";
import NavLinks from "../components/Header/NavLinks";

const Header = ({ activeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative z-30">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Botón de menú móvil */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <HeaderMenuMobileButton name="menu" />
              ) : (
                <HeaderMenuMobileButton name="close" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú de escritorio */}
      <div className="hidden sm:flex fixed left-0 top-1/4 transform -translate-y-1/2 flex-col space-y-4 pl-4 z-10">
        <NavLinks isMobile={false} activeId={activeId} />
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black bg-opacity-90 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="px-4 pt-4 pb-3 flex flex-col space-y-4 items-center justify-center h-[90%]">
          <button
            onClick={toggleMenu}
            type="button"
            className="absolute top-4 right-4 inline-flex items-center justify-center p-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <HeaderMenuMobileButton name="close" />
          </button>
          <NavLinks
            className="text-base"
            isMobile={true}
            closeMenu={closeMenu}
            activeId={activeId}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;

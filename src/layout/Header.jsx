import { useState } from "react";
import HeaderButton from "../components/Header/HeaderButton";
import HeaderMenuMobileButton from "../components/Header/HeaderMenuMobileButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <HeaderMenuMobileButton name="menu" />
              ) : (
                <HeaderMenuMobileButton name="close" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <HeaderButton to={"/"} text={"Home"} className={"text-sm"} />
                <HeaderButton
                  to={"/contact"}
                  text={"Contact"}
                  className={"text-sm"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil*/}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 ">
            <HeaderButton to={"/"} text={"Home"} className={"text-base"} />
            <HeaderButton
              to={"/contact"}
              text={"Contact"}
              className={"text-base"}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

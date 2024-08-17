import { useState } from "react";
import HeaderButton from "./HeaderButton";

const menuItems = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Experience", url: "/experience" },
  { name: "Contact", url: "/contact" },
];

const NavLinks = ({ isMobile, closeMenu }) => {
  const [active, setActive] = useState(0);

  return (
    <nav>
      <ul
        className={`flex flex-col ${
          isMobile ? " items-center space-y-4" : "space-y-2"
        }`}
      >
        {menuItems.map((menuItem, i) => (
          <li key={i}>
            <HeaderButton
              to={menuItem.url}
              text={menuItem.name}
              extraClass={
                active === i ? "text-white underline decoration-orange-500" : ""
              }
              onClick={() => {
                setActive(i);
                isMobile && closeMenu();
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

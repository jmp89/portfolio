import HeaderButton from "./HeaderButton";

const menuItems = [
  { name: "Inicio", url: "#home" },
  { name: "Proyectos", url: "#projects" },
  { name: "Estudios", url: "#achievements" },
  { name: "Contacto", url: "#contact" },
];

const NavLinks = ({ isMobile, closeMenu, activeId }) => {
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
                menuItem.url === `#${activeId}`
                  ? "text-white underline decoration-orange-500"
                  : ""
              }
              onClick={() => {
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

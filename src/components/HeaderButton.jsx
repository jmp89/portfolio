import { NavLink } from "react-router-dom";

const HeaderButton = ({ to, className, text }) => {
  return (
    <NavLink
      to={to}
      className={`hover:bg-black hover:text-white px-3 py-2 rounded-md font-medium ${className}`}
    >
      {text}
    </NavLink>
  );
};
export default HeaderButton;

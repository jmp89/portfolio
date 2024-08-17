import { NavLink } from "react-router-dom";

const HeaderButton = ({ to, extraClass, text, onClick }) => {
  return (
    <NavLink
      to={to}
      className={`underline-offset-4 hover:text-white rounded-md font-medium text-xl ${extraClass}`}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
};
export default HeaderButton;

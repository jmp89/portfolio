const HeaderButton = ({ to, extraClass, text, onClick }) => {
  return (
    <a
      href={to}
      className={`underline-offset-4 hover:text-white rounded-md font-medium text-xl ${extraClass}`}
      onClick={onClick}
    >
      {text}
    </a>
  );
};
export default HeaderButton;

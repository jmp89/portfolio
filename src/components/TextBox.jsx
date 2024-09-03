const TextBox = ({ title, children }) => {
  return (
    <article className="max-w-3xl">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <hr className="w-full border-orange-500 mb-2" />
      {children}
    </article>
  );
};
export default TextBox;

import { useState } from "react";

const Input = ({
  type = "text",
  required = false,
  label,
  name,
  value,
  onChange,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
  };

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    if (onChange) onChange(e);
  };

  return (
    <div className="relative w-full max-w-lg">
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          required={required}
          spellCheck="false"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`peer w-full min-h-[5rem] rounded-md text-gray-400 text-lg py-2 px-[15px] border-2 border-gray-400 ${
            isFocused || hasValue ? "bg-neutral-800" : "bg-transparent"
          } outline-none transition-all duration-300 focus:border-orange-600 ${className}`}
          placeholder=" "
          rows="5"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          spellCheck="false"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`peer w-full h-10 rounded-md text-gray-400 text-lg py-0 px-[15px] border-2 border-gray-400 ${
            isFocused || hasValue ? "bg-neutral-800" : "bg-transparent"
          } outline-none transition-all duration-300 focus:border-orange-600 ${className}`}
          placeholder=" "
        />
      )}
      <label
        className={`absolute left-[15px] transition-all duration-300 pointer-events-none ${
          type === "textarea"
            ? isFocused || hasValue
              ? "-top-3 text-[16px] px-[10px] bg-neutral-800 rounded-lg text-orange-500"
              : "top-2 text-[19px] bg-transparent"
            : isFocused || hasValue
            ? "-top-3 text-[16px] px-[10px] bg-neutral-800 rounded-lg text-orange-500"
            : "top-1/2 -translate-y-1/2 text-[19px] bg-transparent"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

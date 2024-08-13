import { useState } from "react";

const Input = ({ type = "text", required = false, label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
  };

  return (
    <div className="relative w-full max-w-lg ">
      <input
        type={type}
        required={required}
        spellCheck="false"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={`peer w-full h-10 rounded-md text-gray-400 text-lg py-0 px-[15px] border-2 border-gray-400 ${
          isFocused || hasValue ? "bg-neutral-800" : "bg-transparent"
        } outline-none transition-all duration-300 focus:border-orange-600 z-10`}
        placeholder=" "
      />
      <label
        className={`absolute left-[15px] transition-all duration-300
          ${
            isFocused || hasValue
              ? "-top-3 text-[16px] px-[10px] bg-neutral-800 z-0"
              : "top-1/2 -translate-y-1/2 text-[19px] z-0"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

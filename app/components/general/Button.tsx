import React, { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  icon: Icon,
  disabled,
}) => {
  return (
    <button
      //
      className={`transition ease-in duration-300 inline-flex items-center justify-center gap-1  mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white text-sm font-medium text-center md:text-xl rounded-full hover:bg-purple-600  focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900  ${
        outline ? "border" : "border-0"
      } ${small ? "w-[250px] " : "w-full py-2"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Render the optional icon if provided */}
      {Icon && <span className="mr-2">{Icon}</span>}
      {text}
    </button>
  );
};

export default Button;

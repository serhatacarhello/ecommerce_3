import React, { MouseEvent } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
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
  icon,
  disabled,
}) => {
  return (
    <button
      //
      className={`transition ease-in duration-300 inline-flex items-center justify-center gap-1 text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white text-center rounded-full hover:bg-purple-600  focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900  ${
        outline ? "border" : "border-0"
      } ${small ? "w-[250px] " : "w-full py-2 text-xl"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Render the optional icon if provided */}
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;

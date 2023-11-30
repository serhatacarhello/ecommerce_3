import { ReactNode } from "react";

interface ChoiceInputProps {
  text: string;
  icon: ReactNode;
  onClick: (value: string) => void;
  selected?: boolean;
}

const ChoiceInput: React.FC<ChoiceInputProps> = ({
  text,
  icon,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(text)}
      className={`rounded-md flex  items-center  gap-1 h-6 justify-center  border p-2 cursor-pointer mb-2 ${
        selected ? "border-black" : "border-gray-300"
      }`}
    >
      <span>{icon}</span>
      <span className="text-sm md:text-lg font-medium block items-center justify-center text-green-700 dark:text-green-500">
        {" "}
        {text}
      </span>
    </div>
  );
};

export default ChoiceInput;

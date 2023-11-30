import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckboxProps {
  id: string;
  disabled?: boolean;
  label?: string;
  register: UseFormRegister<FieldValues>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  disabled,
  label,
  register,
}) => {
  return (
    <div className="flex items-start mb-2">
      <div className="flex items-center gap-1 h-6">
        <input
          className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          id={id}
          disabled={disabled}
          type="checkbox"
          {...register(id)}
        />

        <label
          htmlFor={id}
          className="text-sm md:text-lg font-medium block items-center justify-center text-green-700 dark:text-green-500"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;

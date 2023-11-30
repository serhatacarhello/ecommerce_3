import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
  disabled?: boolean;
  type: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<InputProps> = ({
  id,
  placeholder,
  disabled,
  type,
  required,
  register,
  errors,
  onChange,
}) => {
  const isError = errors && errors[id];

  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium ${
          isError
            ? "text-red-700 dark:text-red-500"
            : "text-green-700 dark:text-green-500"
        }`}
      >
        {placeholder}
      </label>
      <input
        className={`${
          isError
            ? "bg-red-50 border border-red-500 text-red-900"
            : "bg-green-50 border border-green-500 text-green-900"
        } placeholder-${
          isError ? "red-700" : "green-700"
        } text-sm rounded-lg focus:ring-${
          isError ? "red-500" : "green-500"
        } focus:border-${
          isError ? "red-500" : "green-500"
        } block w-full p-2.5 dark:bg-gray-700 dark:border-${
          isError ? "red-500" : "green-500"
        } dark:text-${isError ? "red-500" : "green-500"} dark:placeholder-${
          isError ? "red-500" : "green-500"
        }`}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        {...register(id, { required })}
        onChange={onChange}
      />
      {errors[id]?.type === "required" && (
        <p className="text-red-500" role="alert">
          {errors ? `${errors[id]?.type} field` : null}
        </p>
      )}
    </div>
  );
};

export default FileInput;

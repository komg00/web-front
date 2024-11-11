import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-dark1 text-lg lg:text-2xl mb-2 lg:mb-3">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="min-w-full appearance-none bg-lightGreen border-b-2 p-3 text-lg lg:text-2xl text-dark2 leading-tight focus:outline-green-700"
      />
    </div>
  );
}

export default InputField;

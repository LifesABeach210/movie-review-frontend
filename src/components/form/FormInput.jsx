import React from "react";

export default function FormInput({ name, rest, placeholder, label }) {
  return (
    <div className="flex flex-col">
      <label
        className="text-white font-semibold peer-fucus-whit "
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className="bg-transparent rounded border-2 border-dark-subtle focus:border-white p-1 w-full text-lg outline-none text-white peer"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

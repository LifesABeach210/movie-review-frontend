import React from "react";

export default function FormInput({ name, placeholder, label, ...rest }) {
  return (
    <div className="flex flex-col">
      <label
        className="dark:text-dark-subtle font-semibold dark:peer-focus:text-white self-start"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        name={name}
        id={name}
        className="bg-transparent rounded border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white p-1 w-full text-lg  dark:text-white peer"
        type="text"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

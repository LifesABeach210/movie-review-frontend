import React from "react";

export default function FormContainer({ children, className }) {
  return (
    <div className={"inset-0 dark:bg-primary bg-white -z-10 flex" + className}>
      {children}
    </div>
  );
}

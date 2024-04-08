import React from "react";

function Button({ children, type, disabled }) {
  const styles = {
    primary:
      "flex justify-center items-center text-blue-600 rounded-full   border-2 border-blue-600 px-4 py-2 font-medium",
    secondary:
      "flex justify-center items-center text-white rounded-full bg-blue-600  px-4 py-3 font-medium",
    tertiary:
      "bg-blue-600 text-white uppercase font-semibold text-sm px-2 rounded",
  };

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;

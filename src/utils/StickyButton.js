import React from "react";

function StickyButton({ type, subscript, children }) {
  const style = {
    primary:
      "absolute -right-7 top-64 -rotate-90 gap-0 px-4 py-3  shadow  shadow-stone-400 rounded-md",
    secondary:
      "text-white bg-slate-700 rounded-md absolute right-20 bottom-52 px-3 py-3",
  };
  return (
    <button className={style[type]}>
      {" "}
      {subscript && (
        <sup class=" absolute bg-red-700 rounded-full text-xs -right-2 -top-3 px-2 py-1">
          2
        </sup>
      )}
      {children}
    </button>
  );
}

export default StickyButton;

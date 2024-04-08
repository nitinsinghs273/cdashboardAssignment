import React from "react";

function Card({ src, title, children }) {
  return (
    <div className="flex gap-2 border w-5/12 py-4 px-2 sm:text-sm">
      <img className="h-32 mb-5 sm:h-40" src={src} alt="img" />
      <div className="flex flex-col gap-4">
        <h2 className="font-bold ">{title}</h2>
        <p>{children}</p>
        <a href="https://youtube.com" className="text-blue-600">
          Watch Video
        </a>
      </div>
    </div>
  );
}

export default Card;

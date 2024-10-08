import React from "react";

export default function Title({ type, textPrimary, textSecondary, where }) {
  const textSize = type === "header" ? "md:text-9xl" : "md:text-6xl";
  return (
    <div className="flex flex-row w-auto h-auto">
      <h1
        className={`font-sofia ${
          where === "other" ? "text-transparent mr-2" : "text-transparent"
        } 
         ${
           type === "header"
             ? " md:text-stroke text-stroke-mobile"
             : " md:text-stroke-light text-stroke-mobile-light"
         }
        
         
        text-7xl ${textSize} font-extrabold select-none`}
      >
        {textPrimary}
      </h1>
      <h1
        className={`font-sofia text-primary text-7xl ${textSize} font-bold select-none`}
      >
        {textSecondary}
      </h1>
    </div>
  );
}

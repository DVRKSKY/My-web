import React, { useEffect, useState } from "react";

export default function CardProyects({ title, text, url, image }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false); // Reset the load state when image or url changes

    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true); // Set the load state to true when the image is loaded

    return () => {
      img.onload = null; // Cleanup function to nullify onload event
    };
  }, [image, url]); // useEffect will run again if either image or url changes

  const imageClassNames = isLoaded
    ? "h-[50%] w-[100%] rounded-t-lg object-cover loaded"
    : "h-[50%] w-[100%] rounded-t-lg object-cover";

  return (
    <div className="md:w-[30%] w-full h-[440px] ma-auto m-5 rounded-lg justify-center flex flex-col items-center border-tertiary-100 border hover:shadow-lg">
      <img src={image} alt={title} className={imageClassNames} />
      <div className="w-full h-[50%] flex flex-col justify-center items-start md:px-6 px-4 ">
        <h3 className="text-tertiary text-xl my-0">{title}</h3>
        {url === "" ? null : (
          <a
            href={`http://${url}`}
            target="_blank"
            rel="noreferrer"
            className="my-2 text-primary cursor-pointer "
          >
            Visit proyect
          </a>
        )}
        <span className="text-justify text-tertiary font-light">{text}</span>
      </div>
    </div>
  );
}

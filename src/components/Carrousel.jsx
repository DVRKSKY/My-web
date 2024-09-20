import React, { useState, useEffect } from "react";
import { CardProyects, IconChevronLeft, IconChevronRight } from "../components";

export default function Carrousel() {
  const [inicio, setInicio] = useState(0);
  const [final, setFinal] = useState(1);
  const [windowSize, setWindowSize] = useState(
    window.visualViewport?.width || window.innerWidth
  );

  const array = [
    {
      title: "Agronotas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Agronotas.png?alt=media&token=887e8f69-1e0b-40c2-a386-86c32505d1f5",
      subtitle:
        "I developed the MVP for the startup with an impact on Agro, providing a crop management tool. The application allows for crop control.",
      url: "",
    },
    {
      title: "Keepers",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-keepers.png?alt=media&token=1e4201a2-5841-4c71-a852-a32fdf340abb",
      subtitle:
        "I developed a platform that connects cleaning agents with clients who require their services. The application allows cleaning agents to manage their services.",
      url: "",
    },
    {
      title: "Quiru",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-quiru.png?alt=media&token=a35c22d6-4bc4-4c07-a30d-46d008541ce5",
      subtitle:
        "I developed a tool for dentists to manage their appointments and patients. The application allows for patient and appointment control. But the most outstanding feature is its speech-to-text system for creating odontograms.",
      url: "",
    },
    {
      title: "Asap",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-asap.png?alt=media&token=ffdde566-5873-436a-84ca-2fb1f9c951d6",
      subtitle:
        "Platform to measure the workload in your company. The application allows for project and task control. But the most outstanding feature is its task recognition system.",
      url: "",
    },
    {
      title: "Inventary Proactivo",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Proactivo.png?alt=media&token=9ca7f7c2-ca35-4629-97cc-8d0704c7a45d",
      subtitle:
        "Platform for inventory and sales management. The application allows for product and sales control. But the most outstanding feature is its product recognition system using QR.",
      url: "",
    },
    {
      title: "Ecomarka",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Ecomarka.png?alt=media&token=9d8d1681-2e11-4254-a70d-2aedf80ee922",
      subtitle:
        "The Ecomarka website was developed to highlight their products and increase their market reach. The website features a blog and informative views of the products.",
      url: "",
    },
    {
      title: "Pokemon",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Pokemon.png?alt=media&token=828fae33-f9f8-4c7c-a034-f1b5e2496bc0",
      subtitle:
        "Simulator of a Nintendo Switch with the Pokemon game. You can select your Pokemon and fight against other Pokemon. The application allows you to keep track of the Pokemon and battles.",
      url: "",
    },
    {
      title: "Rick y Morty",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Rick-andMorty.png?alt=media&token=224d026c-1341-4fea-b048-62861701b648",
      subtitle:
        "Ready for the hunt? I present the recognition system for Rick and Morty characters. You can search, select, and view the details of the characters.",
      url: "",
    },
    {
      title: "Alidas Home",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-alidas.png?alt=media&token=9fa03189-8d2b-483b-9662-28fff843121a",
      subtitle:
        "Website design for the company Alidas Home. The website features a blog and informative views of the products.",
      url: "",
    },
    {
      title: "Xplore",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Xplore.png?alt=media&token=d8898c86-8613-45e4-93a3-2eb4c78dbddf",
      subtitle:
        "I developed the website for Xplore, a program of the Universidad Privada Antenor Orrego, focused on entrepreneurs in the ideation phase.",
      url: "",
    },
    {
      title: "Desafio Ods",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-ods.png?alt=media&token=9a34aa7f-9ff6-4db6-b523-4a5caaf6493f",
      subtitle:
        "I developed the website for the Desafio ODS event, which aimed to receive solutions for the Sustainable Development Goals. The website features a blog, informative views of the events, and registration of your ideas.",
      url: "",
    },
    {
      title: "Cowtech",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-cowteck.png?alt=media&token=f6d9304c-5979-41de-9ece-b48e9b33463d",
      subtitle:
        "Seeking to impact through Open Innovation, the Cowtech website was created. It aimed to inform about the program, the challenges, and the prizes that would take place.",
      url: "",
    },
  ];

  const [subGrupos, setSubGrupos] = useState(0);
  const [arrayMostrado, setArrayMostrado] = useState([]);
  let step = windowSize <= 768 ? 1 : 3; // ajusta el valor según tus necesidades

  useEffect(() => {
    setFinal(step);
    const handleResize = () => {
      setWindowSize(window.visualViewport?.width || window.innerWidth);
      step = windowSize <= 768 ? 1 : 3;
      setFinal(inicio + step);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  useEffect(() => {
    setSubGrupos(Math.ceil((array.length - 1) / step));
    setArrayMostrado(array.slice(inicio, final));
  }, [inicio, final, step]);

  const adelante = () => {
    if (final >= array.length) {
      setInicio(0);
      setFinal(step);
    } else {
      setInicio(inicio + step);
      setFinal(final + step);
    }
  };

  const atras = () => {
    if (inicio === 0) {
      const newStart = Math.floor((array.length - 1) / step) * step;
      setInicio(newStart);
      setFinal(array.length);
    } else {
      setInicio(inicio - step);
      setFinal(inicio);
    }
  };

  return (
    <div className="w-screen h-auto mt-10 flex flex-row justify-center items-center md:px-24 px-2 ">
      <h2
        className="md:mr-4 ml-1 hover:text-primary text-tertiary cursor-pointer"
        onClick={() => atras()}
      >
        <IconChevronLeft />
      </h2>
      {arrayMostrado.map((item, index) => (
        <CardProyects
          key={index}
          text={item.subtitle}
          title={item.title}
          url={item.url}
          image={item.imagen}
        />
      ))}
      <h2
        className="md:ml-4 mr-1 hover:text-primary text-tertiary cursor-pointer"
        onClick={() => adelante()}
      >
        <IconChevronRight />
      </h2>
    </div>
  );
}

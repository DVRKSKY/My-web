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
        "Desarrollé el MVP para la startup con impacto en Agro, brindando una herramienta de gestión de cultivos. La aplicación permite llevar un control de los cultivos.",
      url: "agronotas.web.app/",
    },
    {
      title: "Keepers",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-keepers.png?alt=media&token=1e4201a2-5841-4c71-a852-a32fdf340abb",
      subtitle:
        "Desarrollé una plataforma que conecta agentes de limpieza con clientes que requieren sus servicios. La aplicación permite a los agentes de limpieza gestionar sus servicios.",
      url: "keepers.pe",
    },
    {
      title: "Quiru",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-quiru.png?alt=media&token=a35c22d6-4bc4-4c07-a30d-46d008541ce5",
      subtitle:
        "Desarrollé una herramienta para dentistas con el objetivo de gestionar sus citas y pacientes. La aplicación permite llevar un control de los pacientes y citas. Pero lo mas resaltante es su sistema de speech to text para la creación de odontogramas.",
      url: "quiru.app/",
    },
    {
      title: "Asap",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-asap.png?alt=media&token=ffdde566-5873-436a-84ca-2fb1f9c951d6",
      subtitle:
        "Plataforma para medir la carga laboral en tu empresa. La aplicación permite llevar un control de los proyectos y tareas. Pero lo mas resaltante es su sistema de reconocimiento de tareas.",
      url: "",
    },
    {
      title: "Inventary Proactivo",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Proactivo.png?alt=media&token=9ca7f7c2-ca35-4629-97cc-8d0704c7a45d",
      subtitle:
        "Plataforma para gestión de inventarios y ventas. La aplicación permite llevar un control de los productos y ventas. Pero lo mas resaltante es su sistema de reconocimiento de productos mediante QR.",
      url: "sistema-inventario-proactivo.firebaseapp.com/",
    },
    {
      title: "Ecomarka",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Ecomarka.png?alt=media&token=9d8d1681-2e11-4254-a70d-2aedf80ee922",
      subtitle:
        "Se desarrolló el sition web de Ecomarka para realzar sus productos y poder incrementar su alcance en el mercado. El sitio web cuenta con un vlog y vistas informativas de los productos.",
      url: "ecomarka.web.app/",
    },
    {
      title: "Pokemon",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Pokemon.png?alt=media&token=828fae33-f9f8-4c7c-a034-f1b5e2496bc0",
      subtitle:
        "Simulador de una nintendo switch con el juego de pokemon. Puedes seleccionar tu pokemon y pelear contra otros pokemon. La aplicación permite llevar un control de los pokemones y peleas.",
      url: "",
    },
    {
      title: "Rick y Morty",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Rick-andMorty.png?alt=media&token=224d026c-1341-4fea-b048-62861701b648",
      subtitle:
        "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes",
      url: "",
    },
    {
      title: "Alidas Home",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-alidas.png?alt=media&token=9fa03189-8d2b-483b-9662-28fff843121a",
      subtitle:
        "Diseño de un sitio web para la empresa Alidas Home. El sitio web cuenta con un blog y vistas informativas de los productos.",
      url: "",
    },
    {
      title: "Xplore",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Xplore.png?alt=media&token=d8898c86-8613-45e4-93a3-2eb4c78dbddf",
      subtitle:
        "Desarrollé la pagina web de Xplore, un programa de la Universidad Privada Antenor Orrego, enfocada a emprendedores en fase de Ideación.",
      url: "xplore.s360.pe/",
    },
    {
      title: "Desafio Ods",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-ods.png?alt=media&token=9a34aa7f-9ff6-4db6-b523-4a5caaf6493f",
      subtitle:
        "Desarrollé el sitio web para el evento desafio ods, que buscaba recibir soluciones para los objetivos de desarrollo sostenible. El sitio web cuenta con un blog ,vistas informativas de los eventos y registro de tus ideas",
      url: "desafioods.s360.pe/",
    },
    {
      title: "Cowtech",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-cowteck.png?alt=media&token=f6d9304c-5979-41de-9ece-b48e9b33463d",
      subtitle:
        "Buscando impactar mediante Open Innovation, se realizo el sitio web de Cowtech. Que buscaba informar sobre el programa los desafios y los premios que se llevarian acabo.",
      url: "cowtech.s360.pe/",
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
    <div className="w-screen h-auto my-32 flex flex-row justify-center items-center md:px-24 px-2 ">
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

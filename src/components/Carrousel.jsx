import React, { useState, useEffect } from 'react'
import { CardProyects, IconChevronLeft, IconChevronRight } from '../components'

export default function Carrousel() {
  const [inicio, setInicio] = useState(0);
  const [final, setFinal] = useState(1);
  const [windowSize, setWindowSize] = useState(window.visualViewport?.width || window.innerWidth);

  const array = [
    { title: "Agronotas",           subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Keepers",             subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Quiru",               subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Pokemon",             subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Rick y Morty",        subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Ecomarka",            subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Alidas Home",         subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Asap",                subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Xplore",              subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Mentor",              subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Cowtech",             subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Desafio Ods",         subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Inventary Proactivo", subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },




  ];

  const [subGrupos, setSubGrupos] = useState(0);
  const [arrayMostrado, setArrayMostrado] = useState([]);
  let step = windowSize <= 768 ? 1 : 3;  // ajusta el valor según tus necesidades

  useEffect(() => {
    setFinal(step);
    const handleResize = () => {
      setWindowSize(window.visualViewport?.width || window.innerWidth);
      step = windowSize <= 768 ? 1 : 3;  
      setFinal(inicio + step);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
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
    <div className='w-screen h-auto my-32 flex flex-row justify-center items-center md:px-24 px-2 '>
      <h2 className='md:mr-4 ml-1 hover:text-primary text-tertiary cursor-pointer' onClick={() => atras()}><IconChevronLeft /></h2>
      {arrayMostrado.map((item, index) => (
        <CardProyects key={index} text={item.subtitle} title={item.title} url={item.url} />
      ))}
      <h2 className='md:ml-4 mr-1 hover:text-primary text-tertiary cursor-pointer' onClick={() => adelante()}><IconChevronRight /></h2>
    </div>
  )
}

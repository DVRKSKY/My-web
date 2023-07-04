import React, { useState, useEffect } from 'react'
import { CardProyects, IconChevronLeft, IconChevronRight } from '../components'

export default function Carrousel() {
  const [inicio, setInicio] = useState(0);
  const [final, setFinal] = useState(1);
  const [windowSize, setWindowSize] = useState(window.visualViewport?.width || window.innerWidth);

  const array = [
    { title: "Agronotas",           imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Agronotas.png?alt=media&token=887e8f69-1e0b-40c2-a386-86c32505d1f5" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"agronotas.web.app/" },
    { title: "Keepers",             imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-keepers.png?alt=media&token=1e4201a2-5841-4c71-a852-a32fdf340abb" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"" },
    { title: "Quiru",               imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-quiru.png?alt=media&token=a35c22d6-4bc4-4c07-a30d-46d008541ce5" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"quiru.app/" },
    { title: "Asap",                imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-asap.png?alt=media&token=ffdde566-5873-436a-84ca-2fb1f9c951d6" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"" },
    { title: "Inventary Proactivo", imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Proactivo.png?alt=media&token=9ca7f7c2-ca35-4629-97cc-8d0704c7a45d" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"sistema-inventario-proactivo.firebaseapp.com/" },
    { title: "Ecomarka",            imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Ecomarka.png?alt=media&token=9d8d1681-2e11-4254-a70d-2aedf80ee922" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"ecomarka.web.app/" },
    { title: "Pokemon",             imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Pokemon.png?alt=media&token=828fae33-f9f8-4c7c-a034-f1b5e2496bc0" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"pokemon-front-production-c8ba.up.railway.app" },
    { title: "Rick y Morty",        imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Rick-andMorty.png?alt=media&token=224d026c-1341-4fea-b048-62861701b648" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"hunt-rick.web.app/" },
    { title: "Alidas Home",         imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-alidas.png?alt=media&token=9fa03189-8d2b-483b-9662-28fff843121a" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"" },
    { title: "Xplore",              imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-Xplore.png?alt=media&token=d8898c86-8613-45e4-93a3-2eb4c78dbddf" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"xplore.s360.pe/" },
    { title: "Desafio Ods",         imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-ods.png?alt=media&token=9a34aa7f-9ff6-4db6-b523-4a5caaf6493f" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"desafioods.s360.pe/" },
    { title: "Cowtech",             imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-cowteck.png?alt=media&token=f6d9304c-5979-41de-9ece-b48e9b33463d" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"cowtech.s360.pe/" },
    { title: "Mentor",              imagen:"https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FPortada-mentor.png?alt=media&token=fba28e77-91e7-4c03-ae49-7c0322a5ad35" , subtitle: "Listo para la cacería? Te presento el sistema de reconocimiento para personajes de Rick y Morty. Puedes buscar, seleccionar y ver el detalle de los personajes", url:"mentores.s360.pe/" },




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
        <CardProyects key={index} text={item.subtitle} title={item.title} url={item.url}  image={item.imagen}/>
      ))}
      <h2 className='md:ml-4 mr-1 hover:text-primary text-tertiary cursor-pointer' onClick={() => adelante()}><IconChevronRight /></h2>
    </div>
  )
}

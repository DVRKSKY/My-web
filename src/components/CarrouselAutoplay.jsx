import React, { useState, useEffect } from "react";

export default function CarrouselAutoplay() {
  const data = [
    { text: "Optimiza tu", fixed: "productividad" },
    { text: "Moderniza tu", fixed: "infraestructura" },
    { text: "Innova en tus", fixed: "servicios" },
    { text: "Automatiza ", fixed: "operaciones" },
    { text: "Eleva tu", fixed: "marca" },
    { text: "Securiza tu", fixed: "información" },
    { text: "Transforma tus", fixed: "ideas" },
    { text: "Desarrolla tu", fixed: "software" },
    { text: "Digitaliza tu", fixed: "negocio" },
    { text: "Integra tus", fixed: "sistemas" },
    { text: "Maximiza tu", fixed: "rentabilidad" },
    { text: "Analiza tus", fixed: "datos" },
    { text: "Mejora tu", fixed: "visibilidad" },
    { text: "Potencia tu", fixed: "e-commerce" },
    { text: "Personaliza tu", fixed: "experiencia" },
    { text: "Moviliza tu", fixed: "plataforma" },
    { text: "Expande tu", fixed: "alcance" },
    { text: "Visualiza tu", fixed: "información" },
    { text: "Fortalece tu", fixed: "presencia" },
    { text: "Escalabiliza tu", fixed: "solución" },
  ];

  const [offset, setOffset] = useState(0);
  const duplicatedData = [...data, ...data]; // Duplicamos los datos
  const itemWidth = 250; // Estimación del ancho de cada item. Ajusta si es necesario.
  useEffect(() => {
    const moveBanner = setInterval(() => {
      if (offset <= -itemWidth * data.length) {
        // Una vez que la primera mitad esté completamente fuera de la vista, reiniciamos el offset.
        setOffset(0);
      } else {
        setOffset((prev) => prev - 1);
      }
    }, 30);
    return () => clearInterval(moveBanner);
  }, [offset]);

  return (
    <div className="relative w-full overflow-auto py-20">
      <div
        style={{ transform: `translateX(${offset}px)` }}
        className="flex transition-transform duration-300 ease-out"
      >
        {duplicatedData.map((item, index) => (
          <div key={index} className="h-auto mx-4 text-center select-none">
            <h2 className="text-xl text-primary w-36 font-light">
              {item.text}{" "}
              <strong className="text-primary font-medium">{item.fixed}</strong>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
